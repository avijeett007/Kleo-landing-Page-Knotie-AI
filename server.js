import express from 'express'
import cors from 'cors'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env manually (avoid dotenv dep in prod if not needed)
try {
  const envFile = readFileSync(resolve(__dirname, '.env'), 'utf8')
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    let val = trimmed.slice(eqIdx + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (!process.env[key]) process.env[key] = val
  }
} catch {
  console.log('No .env file found, using environment variables')
}

const app = express()
const PORT = process.env.PORT || 3000
const WEBHOOK_URL = process.env.WEBHOOK_URL
const WEBHOOK_API_KEY = process.env.WEBHOOK_API_KEY

app.use(cors())
app.use(express.json())

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Lead submission proxy — keeps webhook URL and API key server-side
app.post('/api/lead', async (req, res) => {
  if (!WEBHOOK_URL) {
    console.error('WEBHOOK_URL not configured')
    return res.status(500).json({ error: 'Webhook not configured' })
  }

  const { name, email, whatsapp, service } = req.body

  if (!name || !email || !whatsapp || !service) {
    return res.status(400).json({ error: 'Missing required fields: name, email, whatsapp, service' })
  }

  const payload = {
    name,
    email,
    whatsapp,
    service,
    timestamp: new Date().toISOString(),
    source: 'kleo.services',
  }

  try {
    const headers = { 'Content-Type': 'application/json' }
    if (WEBHOOK_API_KEY) {
      headers['X-API-Key'] = WEBHOOK_API_KEY
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      console.error(`Webhook returned ${response.status}: ${await response.text()}`)
    }

    res.json({ success: true })
  } catch (err) {
    console.error('Webhook call failed:', err.message)
    // Still return success to the user — we don't want to block UX
    // The lead data is logged and can be retried
    console.log('Lead data (for retry):', JSON.stringify(payload))
    res.json({ success: true })
  }
})

// Serve static files from the Vite build
app.use(express.static(resolve(__dirname, 'dist')))

// SPA fallback — serve index.html for all non-API routes
app.get('*', (_req, res) => {
  res.sendFile(resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Kleo server running on port ${PORT}`)
  console.log(`Webhook configured: ${WEBHOOK_URL ? 'Yes' : 'No — set WEBHOOK_URL in .env'}`)
})

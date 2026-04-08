// ═══════════════════════════════════════════════════════════
// BRANDING CONFIG — All customisable via VITE_ env variables
// Defaults are Kleo branding. Override in .env to white-label.
// ═══════════════════════════════════════════════════════════

// ── Character & Brand Identity ──
export const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || 'Kleo'
export const BRAND_TAGLINE = import.meta.env.VITE_BRAND_TAGLINE || 'Your AI Business Partner.'
export const BRAND_DESCRIPTION = import.meta.env.VITE_BRAND_DESCRIPTION || 'I set up AI systems for your business, chat with your customers, and handle the tech — so you can focus on growing.'

// ── Brand Colors (hex) ──
export const BRAND_COLOR = import.meta.env.VITE_BRAND_COLOR || '#F97316'
export const BRAND_COLOR_DARK = import.meta.env.VITE_BRAND_COLOR_DARK || '#EA580C'
export const BRAND_COLOR_LIGHT = import.meta.env.VITE_BRAND_COLOR_LIGHT || '#FDBA74'

// ── Images ──
export const LOGO_IMAGE = import.meta.env.VITE_LOGO_IMAGE || '/images/kleo-logo.png'
export const CHARACTER_IMAGE = import.meta.env.VITE_CHARACTER_IMAGE || '/images/kleo-character.png'
export const BANNER_IMAGE = import.meta.env.VITE_BANNER_IMAGE || '/images/kleo-banner.png'

// ── Phone ──
export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || '+447861900580'
export const PHONE_HREF = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`
export const PHONE_DISPLAY = PHONE_NUMBER.replace(/(\+\d{2})(\d{4})(\d{6})/, '$1 $2 $3')

// ── Company / Legal ──
export const COMPANY = {
  name: import.meta.env.VITE_COMPANY_NAME || 'Kno2gether Labs LTD',
  number: import.meta.env.VITE_COMPANY_NUMBER || '15454352',
  address: import.meta.env.VITE_COMPANY_ADDRESS || 'Suite A 82 James Carter Road, Mildenhall, Ipswich, IP28 7DE',
  country: import.meta.env.VITE_COMPANY_COUNTRY || 'United Kingdom',
  domain: import.meta.env.VITE_DOMAIN || 'heykleo.cloud',
}

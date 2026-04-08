export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || '+447861900580'
export const PHONE_HREF = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`
export const PHONE_DISPLAY = PHONE_NUMBER.replace(/(\+44)(\d{4})(\d{6})/, '$1 $2 $3')

export const COMPANY = {
  name: 'Kno2gether Labs LTD',
  number: '15454352',
  address: 'Suite A 82 James Carter Road, Mildenhall, Ipswich, IP28 7DE',
  country: 'United Kingdom',
  domain: 'kleo.services',
}

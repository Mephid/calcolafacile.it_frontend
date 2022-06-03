const BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://calcolafacile.it'

const API_BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://calcolafacile-backend.herokuapp.com'

const config = {
    SITE_NAME: 'Calcolafacile.it',
    BASE_URL: BASE_URL,
    CALCULATION_SERVER_API_URL: API_BASE_URL + '/api/calculators',
    CONTACTS_SERVER_API_URL: API_BASE_URL + '/api/email-sender',
}

export default config

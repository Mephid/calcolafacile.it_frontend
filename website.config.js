const BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'http://calcolafacile.it'

const config = {
    BASE_URL: BASE_URL,
    CALCULATION_SERVER_API_URL: BASE_URL + '/api/calculators',
    CONTACTS_SERVER_API_URL: BASE_URL + '/api/contact',
}

export default config

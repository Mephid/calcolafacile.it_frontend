import * as yup from 'yup'

import config from '../../../website.config'

const regions = [
    { label: 'Abruzzo', value: 'ABR' },
    { label: 'Basilicata', value: 'BAS' },
    { label: 'Calabria', value: 'CAL' },
    { label: 'Campania', value: 'CAM' },
    { label: 'Emilia-Romagna', value: 'EMI' },
    { label: 'Friuli Venezia Giulia', value: 'FRI' },
    { label: 'Lazio', value: 'LAZ' },
    { label: 'Liguria', value: 'LIG' },
    { label: 'Lombardia', value: 'LOM' },
    { label: 'Marche', value: 'MAR' },
    { label: 'Molise', value: 'MOL' },
    { label: 'Piemonte', value: 'PIE' },
    { label: 'Puglia', value: 'PUG' },
    { label: 'Sardegna', value: 'SAR' },
    { label: 'Sicilia', value: 'SIC' },
    { label: 'Toscana', value: 'TOS' },
    { label: 'Trentino-Alto Adige (Trento)', value: 'TRT' },
    { label: 'Trentino-Alto Adige (Bolzano)', value: 'TRB' },
    { label: 'Umbria', value: 'UMB' },
    { label: "Valle d'Aosta", value: 'VAL' },
    { label: 'Veneto', value: 'VEN' },
]
const euroClasses = [
    { label: 'Euro 0', value: 'E0' },
    { label: 'Euro 1', value: 'E1' },
    { label: 'Euro 2', value: 'E2' },
    { label: 'Euro 3', value: 'E3' },
    { label: 'Euro 4', value: 'E4' },
    { label: 'Euro 5', value: 'E5' },
    { label: 'Euro 6', value: 'E6' },
]
const powerValues = [
    { label: 'CV', value: 'CV' },
    { label: 'kW', value: 'KW' },
]
const options = { powerValues, euroClasses, regions }

const validationSchema = yup.object().shape({
    powerValue: yup
        .string()
        .oneOf(powerValues.map((option) => option.value))
        .required(),
    quantity: yup.number().required(),
    euroCategory: yup
        .string()
        .oneOf(euroClasses.map((option) => option.value))
        .required(),
    region: yup
        .string()
        .oneOf(regions.map((option) => option.value))
        .required(),
})

const initialValues = {
    powerValue: powerValues[0].value,
    quantity: '',
    euroCategory: euroClasses[0].value,
    region: regions[0].value,
}

const apiUrl = config.CALCULATION_SERVER_API_URL + '/car-tax'

const componentConfig = { apiUrl, options, initialValues, validationSchema }

export default componentConfig

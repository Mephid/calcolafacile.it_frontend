import * as yup from 'yup'

import config from '../../../website.config'

const options = [
    { label: 'CV', value: 'CV' },
    { label: 'kW', value: 'KW' },
]

const validationSchema = yup.object().shape({
    quantity: yup.number().required(),
    powerValue: yup
        .string()
        .oneOf(options.map((option) => option.value))
        .required(),
})

const initialValues = {
    powerValue: options[0].value,
    quantity: '',
}

const apiUrl = config.CALCULATION_SERVER_API_URL + '/converted-power-value'

const componentConfig = { apiUrl, options, initialValues, validationSchema }

export default componentConfig

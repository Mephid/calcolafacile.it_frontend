import * as yup from 'yup'

import config from '../../../website.config'

const options = [
    {
        label: 'Pasta corta',
        value: 'PASTA_CORTA',
    },
    {
        label: 'Pasta lunga',
        value: 'PASTA_LUNGA',
    },
    {
        label: "Pasta all'uovo secca",
        value: 'PASTA_UOVO_SECCA',
    },
    {
        label: 'Riso',
        value: 'RISO',
    },
    {
        label: 'Pasta fresca ripiena',
        value: 'PASTA_FRESCA_RIPIENA',
    },
]

const validationSchema = yup.object().shape({
    pastaType: yup
        .string()
        .oneOf(options.map((option) => option.value))
        .required(),
    weight: yup.number().required(),
})

const initialValues = {
    pastaType: 'PASTA_CORTA',
    weight: '0',
}

const apiUrl =
    config.CALCULATION_SERVER_API_URL + '/cooked-pasta-converted-weight'

const componentConfig = { apiUrl, options, initialValues, validationSchema }

export default componentConfig

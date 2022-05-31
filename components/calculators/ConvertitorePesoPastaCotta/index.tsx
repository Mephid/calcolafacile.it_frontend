import { useFormik } from 'formik'

import Form from '../Shared/StandardCalculator.form'
import Section from '../Shared/StandardCalculator.section'
import SubmitButton from '../../shared/SubmitButton'
import TypeSelect from '../Shared/StandardCalculator.select'
import WeightInput from '../Shared/StandardCalculator.input'
import ConvertitorePesoPastaResult from './ConvertitorePesoPastaResult'
import ConvertitorePesoPastaError from './ConvertitorePesoPastaError'
import useCalculate from '../../../hooks/useCalculate'

import componentConfig from './componentConfig'

const { apiUrl, initialValues, options, validationSchema } = componentConfig

const ConvertitorePesoPasta = () => {
    const { data, error, calculate } = useCalculate(apiUrl)

    const {
        handleSubmit: formikHandleSubmit,
        handleChange,
        isSubmitting,
        handleBlur,
        touched,
        values,
        errors,
    } = useFormik({
        validationSchema: validationSchema,
        initialValues: initialValues,
        onSubmit: async (value, { setSubmitting }) => {
            const { pastaType, weight } = value

            await calculate({ pasta_type: pastaType, weight })
            setSubmitting(false)
        },
    })

    return (
        <Section>
            <Form onSubmit={formikHandleSubmit}>
                <>
                    <TypeSelect
                        hasErrors={touched.pastaType && !!errors.pastaType}
                        feedbackMessage="Seleziona un tipo di pasta"
                        value={values.pastaType}
                        onChange={handleChange}
                        label="Tipo di pasta"
                        onBlur={handleBlur}
                        options={options}
                        id="pastaType"
                    />
                    <WeightInput
                        hasErrors={touched.weight && !!errors.weight}
                        feedbackMessage="Inserisci un numero valido"
                        onChange={handleChange}
                        value={values.weight}
                        onBlur={handleBlur}
                        id="weight"
                        label="Peso (g)"
                        type="number"
                    />
                    <div className="text-center">
                        <SubmitButton isSubmitting={isSubmitting}>
                            Calcola
                        </SubmitButton>
                    </div>
                </>
            </Form>
            {data.convertedWeight && (
                <ConvertitorePesoPastaResult result={data.convertedWeight} />
            )}
            {error.message && (
                <ConvertitorePesoPastaError errorMessage={error.message} />
            )}
        </Section>
    )
}

export default ConvertitorePesoPasta

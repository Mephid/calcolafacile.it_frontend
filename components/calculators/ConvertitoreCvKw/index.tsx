import { useFormik } from 'formik'

import Form from '../Shared/StandardCalculator.form'
import Section from '../Shared/StandardCalculator.section'
import SubmitButton from '../../shared/SubmitButton'
import GroupInput from '../Shared/StandardCalculatorInputGroup.input'
import GroupSelect from '../Shared/StandardCalculatorInputGroup.select'
import GroupContainer from '../Shared/StandardCalculatorInputGroup.container'
import useCalculate from '../../../hooks/useCalculate'

import componentConfig from './componentConfig'
import StandardCalculatorConditionalError from '../Shared/StandardCalculator.conditionalError'
import ConvertitoreCvKwResult from './ConvertitoreCvKwResult'

const { apiUrl, initialValues, options, validationSchema } = componentConfig

const ConvertitoreCvKw = () => {
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
            const { powerValue, quantity } = value

            await calculate({ power_value: powerValue, quantity })
            setSubmitting(false)
        },
    })

    return (
        <Section>
            <Form onSubmit={formikHandleSubmit}>
                <>
                    <GroupContainer
                        htmlFor="quantity"
                        label="Potenza"
                        feedbackMessage="Seleziona una quantità"
                    >
                        <GroupInput
                            hasErrors={touched.quantity && !!errors.quantity}
                            value={values.quantity}
                            onChange={handleChange}
                            label="Quantità"
                            onBlur={handleBlur}
                            type="number"
                            id="quantity"
                        />
                        <GroupSelect
                            hasErrors={
                                touched.powerValue && !!errors.powerValue
                            }
                            feedbackMessage="Seleziona un'unità di misura di potenza"
                            label="Unità di misura della potenza"
                            value={values.powerValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            options={options}
                            id="powerValue"
                        />
                    </GroupContainer>
                    <div className="text-center">
                        <SubmitButton isSubmitting={isSubmitting}>
                            Calcola
                        </SubmitButton>
                    </div>
                </>
            </Form>
            <ConvertitoreCvKwResult
                powerValue={data.powerValue}
                quantity={data.quantity}
            />
            <StandardCalculatorConditionalError errorMessage={error.message} />
        </Section>
    )
}

export default ConvertitoreCvKw

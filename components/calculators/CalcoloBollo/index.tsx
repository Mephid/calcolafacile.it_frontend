import { useFormik } from 'formik'

import Form from '../Shared/StandardCalculator.form'
import Section from '../Shared/StandardCalculator.section'
import SubmitButton from '../../shared/SubmitButton'
import Select from '../Shared/StandardCalculator.select'
import GroupInput from '../Shared/StandardCalculatorInputGroup.input'
import GroupSelect from '../Shared/StandardCalculatorInputGroup.select'
import GroupContainer from '../Shared/StandardCalculatorInputGroup.container'
import CalcoloBolloResult from './CalcoloBolloResult'
import useCalculate from '../../../hooks/useCalculate'

import componentConfig from './componentConfig'
import StandardCalculatorConditionalError from '../Shared/StandardCalculator.conditionalError'

const { apiUrl, initialValues, options, validationSchema } = componentConfig

const CalcoloBollo = () => {
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
            const { euroCategory, powerValue, quantity, region } = value
            await calculate({
                euro_category: euroCategory,
                power_value: powerValue,
                quantity,
                region,
            })
            setSubmitting(false)
        },
    })

    return (
        <Section>
            <Form onSubmit={formikHandleSubmit}>
                <>
                    <Select
                        hasErrors={touched.region && !!errors.region}
                        feedbackMessage="Seleziona una regione"
                        value={values.region}
                        onChange={handleChange}
                        label="Regione"
                        onBlur={handleBlur}
                        options={options.regions}
                        id="region"
                    />
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
                            options={options.powerValues}
                            id="powerValue"
                        />
                    </GroupContainer>
                    <Select
                        hasErrors={
                            touched.euroCategory && !!errors.euroCategory
                        }
                        feedbackMessage="Seleziona una classe euro"
                        value={values.euroCategory}
                        onChange={handleChange}
                        label="Classe euro"
                        onBlur={handleBlur}
                        options={options.euroClasses}
                        id="euroCategory"
                    />
                    <div className="text-center">
                        <SubmitButton isSubmitting={isSubmitting}>
                            Calcola
                        </SubmitButton>
                    </div>
                </>
            </Form>
            <CalcoloBolloResult result={data.carTax} />
            <StandardCalculatorConditionalError errorMessage={error.message} />
        </Section>
    )
}

export default CalcoloBollo

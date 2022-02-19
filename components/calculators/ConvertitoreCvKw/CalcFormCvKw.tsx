import Form from 'react-bootstrap/Form'

import { Formik } from 'formik'
import * as yup from 'yup'
import PowerCvKw from './PowerCvKw'
import LoadingSpinner from '../../shared/LoadingSpinner'

interface ICalcForm {
    handleSubmit: (submitObject: Record<any, string>) => void
    isLoading: boolean
}

const schema = yup.object().shape({
    powerValue: yup.number().min(0).required(),
})

const CalcFormCvKw = ({ handleSubmit, isLoading }: ICalcForm) => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={!isLoading ? handleSubmit : () => {}}
            initialValues={{
                powerUnit: 'CV',
                powerValue: '',
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} noValidate>
                    <PowerCvKw
                        powerValue={values.powerValue}
                        powerUnit={values.powerUnit}
                        handler={handleChange}
                        fieldValueSetter={setFieldValue}
                        isPowerValueInvalid={
                            touched.powerValue && !!errors.powerValue
                        }
                    />

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" type="submit">
                            {isLoading && <LoadingSpinner />}
                            {!isLoading && 'Converti'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CalcFormCvKw

import { Button, Form } from 'react-bootstrap'

import { Formik } from 'formik'
import * as yup from 'yup'
import PowerCvKw from './PowerCvKw'

interface ICalcForm {
    handleSubmit: (submitObject: Record<any, string>) => void
}

const schema = yup.object().shape({
    powerValue: yup.number().min(0).required(),
})

const CalcFormCvKw = ({ handleSubmit }: ICalcForm) => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
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
                        <Button type="submit">Converti</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CalcFormCvKw

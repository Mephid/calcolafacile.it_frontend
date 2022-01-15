import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import LoadingSpinner from '../../shared/LoadingSpinner'

import Regions from './Region'
import Power from './Power'
import EuroClass from './EuroClass'

import { Formik } from 'formik'
import * as yup from 'yup'

interface ICalcForm {
    handleSubmit: (submitObject: Record<any, string>) => void
    isLoading: boolean
}

const schema = yup.object().shape({
    region: yup.string().required(),
    euroClass: yup.string().required(),
    powerValue: yup.number().min(0).required(),
})

const CalcForm = ({ handleSubmit, isLoading }: ICalcForm) => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={!isLoading ? handleSubmit : () => {}}
            initialValues={{
                region: '',
                powerUnit: 'CV',
                euroClass: '',
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
                    <Regions
                        value={values.region}
                        handler={handleChange}
                        isInvalid={touched.region && !!errors.region}
                    />

                    <Power
                        powerValue={values.powerValue}
                        powerUnit={values.powerUnit}
                        handler={handleChange}
                        fieldValueSetter={setFieldValue}
                        isPowerValueInvalid={
                            touched.powerValue && !!errors.powerValue
                        }
                    />

                    <EuroClass
                        value={values.euroClass}
                        handler={handleChange}
                        isInvalid={touched.euroClass && !!errors.euroClass}
                    />

                    <div className="d-flex justify-content-center">
                        <Button type="submit">
                            {isLoading && <LoadingSpinner />}
                            {!isLoading && 'Calcola'}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default CalcForm

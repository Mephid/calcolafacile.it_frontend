import { Col, Row, Button, Form, Spinner, Alert } from 'react-bootstrap'

import { Formik } from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    nome: yup.string(),
    email: yup.string().trim().email().required(),
    soggetto: yup.string(),
    messaggio: yup.string().trim().required(),
    privacyCheck: yup
        .bool()
        .required()
        .oneOf([true], 'Acconsenti per proseguire.'),
})

interface IContactFormProps {
    isLoading: boolean
    doFetch: (body: Record<any, any>) => void
}

const ContactForm = ({ isLoading, doFetch }: IContactFormProps) => {
    const handleSubmit = ({
        nome,
        email,
        soggetto,
        messaggio,
    }: Record<any, any>) => {
        doFetch({
            content: messaggio,
            senderEmail: email,
            subject: soggetto,
            senderName: nome,
        })
    }

    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={!isLoading ? handleSubmit : () => {}}
                initialValues={{
                    nome: '',
                    email: '',
                    soggetto: '',
                    messaggio: '',
                    privacyCheck: false,
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="nome"
                                        onChange={handleChange}
                                        value={values.nome}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md="6">
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Email<span className="required">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={
                                            touched.email && !!errors.email
                                        }
                                        onBlur={handleBlur}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Inserisci una email valida.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Soggetto</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={handleChange}
                                        name="soggetto"
                                        value={values.soggetto}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Messaggio
                                        <span className="required">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="messaggio"
                                        value={values.messaggio}
                                        rows={6}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={
                                            touched.messaggio &&
                                            !!errors.messaggio
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Inserisci un messaggio.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Check
                                    required
                                    name="privacyCheck"
                                    className="mb-4"
                                    type="checkbox"
                                    id={`default-checkbox`}
                                    label={`Acconsento al trattamento dei miei dati personali ai sensi dell'articolo 13 del Regolamento (UE) 2016/679.`}
                                    onChange={handleChange}
                                    isInvalid={
                                        touched.privacyCheck &&
                                        !!errors.privacyCheck
                                    }
                                    feedback={errors.privacyCheck}
                                    feedbackType="invalid"
                                />
                            </Col>
                        </Row>
                        <Button type="submit" className="w-100" size="lg">
                            {isLoading && (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            )}
                            {!isLoading && 'Invia'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default ContactForm

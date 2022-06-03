import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import * as yup from 'yup'
import useCalculate from '../../hooks/useCalculate'
import config from '../../website.config'
import PopupAlert from '../shared/PopupAlert'
import SubmitButton from '../shared/SubmitButton'

const validationSchema = yup.object().shape({
    nome: yup.string(),
    email: yup.string().trim().email().required(),
    soggetto: yup.string(),
    messaggio: yup.string().trim().required(),
    privacyCheck: yup
        .bool()
        .required()
        .oneOf([true], 'Acconsenti per proseguire.'),
})

const initialValues = {
    nome: '',
    email: '',
    soggetto: '',
    messaggio: '',
    privacyCheck: false,
}

const apiUrl = config.CONTACTS_SERVER_API_URL

const ContactForm = () => {
    const [status, setStatus] = useState<'SUCCESS' | 'ERROR'>()
    const controller = useRef<AbortController>()

    useEffect(() => {
        controller.current = new AbortController()

        return () => {
            controller.current?.abort()
        }
    }, [])

    const sendMail = async (body: {
        senderEmail: string
        senderName: string
        subject: string
        content: string
    }) => {
        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
            if (res.ok) {
                setStatus('SUCCESS')
            } else {
                throw new Error('API call went wrong')
            }
        } catch (error) {
            setStatus('ERROR')
        }
    }

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
            const { email, messaggio, nome, soggetto } = value

            await sendMail({
                senderEmail: email,
                senderName: nome,
                subject: soggetto,
                content: messaggio,
            })
            setSubmitting(false)
        },
    })

    return (
        <>
            <form onSubmit={formikHandleSubmit} noValidate>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Nome
                            </label>
                            <input
                                className="form-control"
                                id="name"
                                type="text"
                                name="nome"
                                onChange={handleChange}
                                value={values.nome}
                                aria-label="Nome"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email<span className="required">*</span>
                            </label>
                            <input
                                className={`form-control${
                                    touched.email && !!errors.email
                                        ? ' is-invalid'
                                        : ''
                                }`}
                                id="email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-label="E-mail"
                            />
                            <div className="invalid-feedback">
                                Inserisci una email valida.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="subject">
                                Soggetto
                            </label>
                            <input
                                className="form-control"
                                id="subject"
                                type="text"
                                onChange={handleChange}
                                name="soggetto"
                                value={values.soggetto}
                                aria-label="Soggetto"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Messaggio
                                <span className="required">*</span>
                            </label>
                            <textarea
                                className={`form-control${
                                    touched.messaggio && !!errors.messaggio
                                        ? ' is-invalid'
                                        : ''
                                }`}
                                id="message"
                                name="messaggio"
                                value={values.messaggio}
                                rows={6}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-label="Messaggio"
                            />
                            <div className="invalid-feedback">
                                Inserisci un messaggio.
                            </div>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                name="privacyCheck"
                                type="checkbox"
                                className={`form-check-input mb-4 fs-6${
                                    touched.privacyCheck &&
                                    !!errors.privacyCheck
                                        ? ' is-invalid'
                                        : ''
                                }`}
                                id="validationFormCheck1"
                                onChange={handleChange}
                                required
                            />
                            <label
                                className="form-check-label"
                                htmlFor="validationFormCheck1"
                            >
                                Acconsento al trattamento dei miei dati
                                personali ai sensi dell&apos;articolo 13 del
                                Regolamento (UE) 2016/679.
                            </label>
                            <div className="invalid-feedback">
                                {errors.privacyCheck}
                            </div>
                        </div>
                    </div>
                </div>
                <SubmitButton
                    isSubmitting={isSubmitting}
                    className="btn-lg w-100"
                >
                    Invia
                </SubmitButton>
            </form>
            {status === 'SUCCESS' && (
                <PopupAlert
                    message="Messaggio inviato!"
                    variant="alert-success"
                    isDismissible={true}
                    timer={2000}
                />
            )}
            {status === 'ERROR' && (
                <PopupAlert
                    message="Errore: messaggio non inviato"
                    variant="alert-danger"
                    isDismissible={true}
                    timer={3000}
                />
            )}
        </>
    )
}

export default ContactForm

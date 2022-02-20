import { Formik } from 'formik'
import * as yup from 'yup'
import LoadingSpinner from '../shared/LoadingSpinner'

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
                    <form noValidate onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="name"
                                    >
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
                                    <label
                                        className="form-label"
                                        htmlFor="email"
                                    >
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
                                    <label
                                        className="form-label"
                                        htmlFor="subject"
                                    >
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
                                    <label
                                        htmlFor="message"
                                        className="form-label"
                                    >
                                        Messaggio
                                        <span className="required">*</span>
                                    </label>
                                    <textarea
                                        className={`form-control${
                                            touched.messaggio &&
                                            !!errors.messaggio
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
                                        personali ai sensi dell&apos;articolo 13
                                        del Regolamento (UE) 2016/679.
                                    </label>
                                    <div className="invalid-feedback">
                                        {errors.privacyCheck}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary btn-lg w-100"
                            type="submit"
                        >
                            {isLoading && <LoadingSpinner />}
                            {!isLoading && 'Invia'}
                        </button>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default ContactForm

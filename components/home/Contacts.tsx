import { Col, Row, Container } from 'react-bootstrap'

import PopupAlert from '../shared/PopupAlert'

import useFetch from '../../hooks/useFetch'
import ContactForm from './ContactForm'

import config from '../../website.config'
const apiUrl = config.CONTACTS_SERVER_API_URL + '/email'

const Contacts = () => {
    const [doFetch, result, error, isLoading] = useFetch(apiUrl, 'POST')

    const isSuccessful = result.status === 'success'

    const successResult = isSuccessful && (
        <PopupAlert
            message="Messaggio inviato!"
            variant="success"
            isDismissible={true}
            timer={2000}
        />
    )

    const errorResult = error && (
        <PopupAlert
            message={error}
            variant="danger"
            isDismissible={true}
            timer={3000}
        />
    )

    return (
        <section className="py-5" id="contatti">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="8" xl="6">
                        <div>
                            <h2 className="pb-2">Contatti</h2>
                            <p className="pb-4 paragraph-secondary">
                                C&apos;è un calcolo che vorresti sempre avere a
                                portata di mano? Un&apos;idea per il sito?
                                Oppure vuoi segnalarci un bug? Non esitare a
                                contattarci!
                            </p>
                        </div>
                        <ContactForm isLoading={isLoading} doFetch={doFetch} />
                        {successResult}
                        {errorResult}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contacts

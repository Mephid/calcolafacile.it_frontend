import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

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
        <section className="pb-5" id="contatti">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" lg="8">
                        <div className="text-center">
                            <h2 className="title-lg">Contatti</h2>
                            <p className="pb-4 paragraph-secondary">
                                Hai un&apos;idea per il sito?{' '}
                                {<br className="d-sm-none" />} Oppure vuoi
                                segnalarci un bug? {<br />} Non esitare a
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

import ContactForm from './ContactForm'

const Contacts = () => {
    return (
        <section className="pb-5" id="contatti">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-8">
                        <div className="text-center">
                            <h2 className="title-lg">Contatti</h2>
                            <p className="pb-4 paragraph-secondary">
                                Hai un&apos;idea per il sito?{' '}
                                {<br className="d-sm-none" />} Oppure vuoi
                                segnalarci un bug? {<br />} Non esitare a
                                contattarci!
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts

import Image from 'next/image'
import Link from 'next/link'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
        <section className="bg-secondary padding-navbar">
            <Container className="py-4">
                <Row>
                    <div className="hero__container">
                        <Col xl={7} className="hero__text">
                            <h1 className="title-xl pb-3">
                                Tanti calcolatori per ogni esigenza
                            </h1>
                            <p className="paragraph-lg pb-3">
                                Calcolafacile.it è una raccolta di calcolatori
                                online. Trova quello che ti serve!
                            </p>
                            <Link href="#calculators-showcase" passHref>
                                <a className="btn btn-primary">
                                    Vai ai calcolatori
                                </a>
                            </Link>
                        </Col>
                        <div className="hero__illustration">
                            <Image
                                src="/img/hero-illustration.svg"
                                alt=""
                                width={800}
                                height={800}
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Header

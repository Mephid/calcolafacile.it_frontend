import { Col, Row, Button, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <section className="py-4 d-flex align-items-center margin-navbar">
            <Container>
                <Row>
                    <Col
                        lg="5"
                        className="pt-5 pb-2 text-center text-lg-start d-flex align-items-center"
                    >
                        <div>
                            <h1 className="title-xl pb-3">
                                Tutti i tuoi calcoli a portata di mano
                            </h1>
                            <p className="paragraph-lg pb-3">
                                Calcolafacile.it è una raccolta di calcolatori
                                online. Trova il calcolatore che ti serve!
                            </p>
                            <Link href="#calculators-showcase" passHref>
                                <Button>Vai ai calcolatori</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg="7">
                        <Image
                            src="/img/hero-illustration.svg"
                            alt=""
                            width="2000"
                            height="2000"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header

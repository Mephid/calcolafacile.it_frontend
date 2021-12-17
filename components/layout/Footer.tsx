import Link from 'next/link'

import { Container, Nav, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="py-3 border-top">
            <Container>
                <Row>
                    <Col
                        md="4"
                        className="py-3 d-flex justify-content-md-start justify-content-center align-items-center"
                    >
                        <span>Calcolafacile.it</span>
                    </Col>

                    <Col
                        md="4"
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Nav>
                            <Link href="/#contatti" passHref>
                                <Nav.Link>Contatti</Nav.Link>
                            </Link>
                            <Link href="/privacy-policy" passHref>
                                <Nav.Link>Privacy</Nav.Link>
                            </Link>
                        </Nav>
                    </Col>

                    <Col
                        md="4"
                        className="py-3 d-flex justify-content-md-end justify-content-center align-items-center"
                    >
                        <div>&copy; Copyright 2021-2022</div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

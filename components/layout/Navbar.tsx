import Link from 'next/link'
import { useState } from 'react'

import useCheckYScroll from '../../hooks/useCheckYScroll'

import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap'

const Navbar = () => {
    /* TODO: Close/Toggle handlers will be necessary when builded? */

    const isYScrolled = useCheckYScroll()
    const [isOpen, setIsOpen] = useState(false)

    const navbarClasses = isYScrolled ? 'navbar--scrolled' : 'pt-lg-4'
    const openClass = isOpen ? 'open' : ''

    const toggleOffcanvasHandler = () => {
        setIsOpen((currentState) => !currentState)
    }

    const closeOffcanvasHandler = () => {
        setIsOpen(false)
    }

    return (
        <BSNavbar expand="lg" className={navbarClasses} fixed="top">
            <Container>
                <Link href="/" passHref>
                    <BSNavbar.Brand
                        className="fw-bolder"
                        onClick={closeOffcanvasHandler}
                    >
                        Calcolafacile.it
                    </BSNavbar.Brand>
                </Link>
                <BSNavbar.Toggle onClick={toggleOffcanvasHandler} />
                <div
                    className={`navbar-collapse offcanvas-collapse ${openClass}`}
                >
                    <Nav className="ms-auto">
                        <Container className="nav__container">
                            <Link href="/#calculators-showcase" passHref>
                                <Nav.Link
                                    onClick={closeOffcanvasHandler}
                                    active={false}
                                >
                                    Calcolatori
                                </Nav.Link>
                            </Link>
                            <Link href="/#contatti" passHref>
                                <Nav.Link
                                    onClick={closeOffcanvasHandler}
                                    active={false}
                                >
                                    Contatti
                                </Nav.Link>
                            </Link>
                        </Container>
                    </Nav>
                </div>
            </Container>
        </BSNavbar>
    )
}

export default Navbar

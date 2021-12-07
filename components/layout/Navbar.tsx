import Link from 'next/link'
import { useState } from 'react'

import useCheckYScroll from '../../hooks/useCheckYScroll'

import {
    Container,
    Nav,
    NavDropdown,
    Navbar as BSNavbar,
} from 'react-bootstrap'

const Navbar = () => {
    /* TODO: Close/Toggle handlers will be necessary when builded? */

    const isYScrolled = useCheckYScroll()
    const [isOpen, setIsOpen] = useState(false)

    const navbarClasses = isYScrolled ? 'bg-white shadow-sm' : 'pt-lg-4'
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
                        href=""
                        onClick={closeOffcanvasHandler}
                    >
                        Calcolafacile.it
                    </BSNavbar.Brand>
                </Link>
                <BSNavbar.Toggle onClick={toggleOffcanvasHandler} />
                <div
                    className={'offcanvas offcanvas-collapse ' + openClass}
                    tabIndex={-1}
                    id="offcanvasNav"
                    data-bs-backdrop="false"
                    aria-labelledby="offcanvasNavLabel"
                >
                    <div className="offcanvas-body">
                        <Nav className="ms-auto">
                            <Link href="/#calculators-showcase" passHref>
                                <Nav.Link
                                    href=""
                                    onClick={closeOffcanvasHandler}
                                >
                                    Calcolatori
                                </Nav.Link>
                            </Link>
                            <Link href="/#contatti" passHref>
                                <Nav.Link
                                    href=""
                                    onClick={closeOffcanvasHandler}
                                >
                                    Contatti
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </div>
                </div>
            </Container>
        </BSNavbar>
    )
}

export default Navbar

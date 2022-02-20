import Link from 'next/link'
import { useState } from 'react'

import useCheckYScroll from '../../hooks/useCheckYScroll'

const Navbar = () => {
    /* TODO: Close/Toggle handlers will be necessary when built? */

    const isYScrolled = useCheckYScroll()
    const [isOpen, setIsOpen] = useState(false)

    const navbarClasses = isYScrolled ? ' navbar--scrolled' : ' pt-lg-4'
    const openClass = isOpen ? 'open' : ''

    const toggleOffcanvasHandler = () => {
        setIsOpen((currentState) => !currentState)
    }

    const closeOffcanvasHandler = () => {
        setIsOpen(false)
    }

    return (
        <nav
            className={
                'navbar navbar-expand-lg navbar-light fixed-top' + navbarClasses
            }
        >
            <div className="container">
                <Link href="/" passHref>
                    <a
                        className="navbar-brand fw-bolder"
                        onClick={closeOffcanvasHandler}
                    >
                        Calcolafacile.it
                    </a>
                </Link>
                <button
                    type="button"
                    aria-label="Apre menu navigazione"
                    className="navbar-toggler collapsed"
                    onClick={toggleOffcanvasHandler}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`navbar-collapse offcanvas-collapse ${openClass}`}
                >
                    <div className="nav ms-auto">
                        <div className="nav__container">
                            {/* TODO: Active class when on the section */}
                            <Link href="/#calculators-showcase" passHref>
                                <a
                                    className="navbar__nav-link nav-link"
                                    onClick={closeOffcanvasHandler}
                                >
                                    Calcolatori
                                </a>
                            </Link>
                            <Link href="/#contatti" passHref>
                                <a
                                    className="navbar__nav-link nav-link"
                                    onClick={closeOffcanvasHandler}
                                >
                                    Contatti
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

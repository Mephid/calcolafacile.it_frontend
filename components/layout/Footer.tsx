import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="py-3 border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-3 d-flex justify-content-md-start justify-content-center align-items-center">
                        <span>Calcolafacile.it</span>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="nav">
                            <Link href="/#contatti" passHref>
                                <a className="nav-link">Contatti</a>
                            </Link>
                            <Link href="/privacy-policy" passHref>
                                <a className="nav-link">Privacy</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 py-3 d-flex justify-content-md-end justify-content-center align-items-center">
                        <div>&copy; Copyright 2021-2022</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

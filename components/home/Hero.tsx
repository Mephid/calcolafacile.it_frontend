import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <section className="bg-secondary padding-navbar">
            <div className="container py-4">
                <div className="row">
                    <div className="hero__container">
                        <div className="col-xl-7 hero__text">
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
                        </div>
                        <div className="hero__illustration">
                            <Image
                                src="/img/hero-illustration.svg"
                                alt=""
                                layout="responsive"
                                height={300}
                                width={393}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header

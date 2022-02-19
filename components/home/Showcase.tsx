import ShowcaseCard from './ShowcaseCard'
import React, { useState, useMemo, useEffect } from 'react'

interface IShowcaseProps {
    calculatorsData: { title: string; desc: string; slug: string }[]
}

const Showcase = ({ calculatorsData }: IShowcaseProps) => {
    /* Search input */

    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value
        setSearchTerm(newSearchTerm)
    }

    /* Calculators list */

    const calculatorsList = useMemo(() => {
        if (!searchTerm.trim()) return calculatorsData

        const newCalculatorsList = calculatorsData.filter(
            (calc) =>
                calc.title.includes(searchTerm) ||
                calc.desc.includes(searchTerm)
        )

        return newCalculatorsList
    }, [searchTerm, calculatorsData])

    /* Shown results */

    const [shownResults, setShownResults] = useState<
        { title: string; desc: string; slug: string }[]
    >([])

    useEffect(() => {
        setShownResults(calculatorsList.slice(0, 3))

        /* TODO: if calculatorsList is empty show a Fallback component. (Should never be empty) */
    }, [calculatorsList])

    const handleShowMore = () => {
        setShownResults([
            ...shownResults,
            ...calculatorsList.slice(
                shownResults.length,
                shownResults.length + 3
            ),
        ])
    }

    const hasMore = shownResults.length < calculatorsList.length

    return (
        <section className="section-vertical-spacing" id="calculators-showcase">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-md-6 col-lg-8">
                        <h2 className="title-lg">Calcolatori</h2>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <form
                            className="d-flex my-3 my-md-0"
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                        >
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Cerca"
                                aria-label="Cerca"
                                onChange={handleSearch}
                                value={searchTerm}
                            />
                        </form>
                    </div>
                </div>
                <div className="g-4 pb-4 row row-cols-lg-3 row-cols-1">
                    {shownResults.map((calc) => (
                        <div className="col" key={calc.title}>
                            <ShowcaseCard
                                title={calc.title}
                                description={calc.desc}
                                slug={calc.slug}
                            />
                        </div>
                    ))}
                </div>
                <div className="row row-cols-12">
                    <div className="col d-flex justify-content-center">
                        <button
                            className="btn btn-outline-primary"
                            onClick={handleShowMore}
                            disabled={!hasMore}
                            role="button"
                        >
                            Vedi di più
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase

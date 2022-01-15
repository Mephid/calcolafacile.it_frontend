import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
            <Container>
                <Row className="pb-4">
                    <Col md={6} lg={8}>
                        <h2 className="title-lg">Calcolatori</h2>
                    </Col>
                    <Col md={6} lg={4}>
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
                    </Col>
                </Row>
                <Row xs={1} lg={3} className="g-4 pb-4">
                    {shownResults.map((calc) => (
                        <Col key={calc.title}>
                            <ShowcaseCard
                                title={calc.title}
                                description={calc.desc}
                                slug={calc.slug}
                            />
                        </Col>
                    ))}
                </Row>
                <Row xs="12">
                    <Col className="d-flex justify-content-center">
                        <Button
                            variant="outline-primary"
                            onClick={handleShowMore}
                            disabled={!hasMore}
                        >
                            Vedi di più
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Showcase

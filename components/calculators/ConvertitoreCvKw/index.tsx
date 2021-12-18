import { useState } from 'react'
import { Card } from 'react-bootstrap'
import useFetch from '../../../hooks/useFetch'
import config from '../../../website.config'
import CalcForm from './CalcForm'

const apiUrl = config.CALCULATION_SERVER_API_URL + '/cv-kw-converter'

const ConvertitoreCvKw = () => {
    const [doFetch, fetchResult, fetchError] = useFetch(apiUrl, 'POST')

    const [powerUnit, setPowerUnit] = useState('')

    const getResultUnit = (unit: string) => {
        let result = 'CV'

        switch (unit) {
            case 'CV':
                result = 'kW'
                break

            case 'kW':
                result = 'CV'
                break
        }

        return result
    }

    const error = fetchError && (
        <div className="py-2 px-4 mt-3 rounded bg-light-red text-danger text-center">
            {fetchError}
        </div>
    )

    const formattedResult = (+fetchResult.convertedValue).toFixed(2)

    const result = fetchResult.convertedValue && (
        <div className="py-2 px-4 mt-3 rounded bg-secondary text-primary h2 text-center">
            {formattedResult}
            <span className="fs-4">{' ' + getResultUnit(powerUnit)}</span>
        </div>
    )

    const handleSubmit = ({ powerUnit, powerValue }: Record<any, string>) => {
        setPowerUnit(powerUnit)

        doFetch({
            powerUnit,
            powerValue,
        })
    }

    return (
        <section className="calculator-section">
            <Card className="border calc-card-sm">
                <Card.Body>
                    <CalcForm handleSubmit={handleSubmit} />
                    {result}
                    {error}
                </Card.Body>
            </Card>
        </section>
    )
}

export default ConvertitoreCvKw

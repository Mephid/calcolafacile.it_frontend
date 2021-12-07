import config from '../../../website.config'

import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

import { IWrappedComponent } from './IWrappedComponent'
import CalculatorType from './CalculatorType'

import useFetch from '../../../hooks/useFetch'

const makeCalculator = (
    Component: React.ComponentType<IWrappedComponent>,
    calcType: string
) => {
    const Calculator = () => {
        const [valA, setValA] = useState('')
        const [valB, setValB] = useState('')

        const [validationError, setValidationError] = useState<string | null>(
            null
        )

        const handleValA = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValA(e.target.value)
        }

        const handleValB = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValB(e.target.value)
        }

        const generateFetchParams = (): [{}, string, string] => {
            let bodyObject
            let apiUrl = config.CALCULATION_SERVER_API_URL
            let resultKey

            switch (calcType) {
                case CalculatorType.PART:
                    bodyObject = { perc: valA, whole: valB }
                    apiUrl += '/percentage/part'
                    resultKey = CalculatorType.PART
                    break
                case CalculatorType.PERCENTAGE:
                    bodyObject = { whole: valA, part: valB }
                    apiUrl += '/percentage/perc'
                    resultKey = CalculatorType.PERCENTAGE
                    break
                case CalculatorType.WHOLE:
                    bodyObject = { part: valA, perc: valB }
                    apiUrl += '/percentage/whole'
                    resultKey = CalculatorType.WHOLE
                    break
                default:
                    bodyObject = {}
                    apiUrl = ''
                    resultKey = ''
            }

            return [bodyObject, apiUrl, resultKey]
        }

        const [body, url, resultKey] = generateFetchParams()

        const [doFetch, fetchResult, fetchError] = useFetch(url, 'POST')

        const isFormValid = valA.trim() && valB.trim()

        const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault()

            if (!isFormValid) {
                setValidationError('Compila tutti i campi')
                return
            }

            setValidationError(null)

            doFetch(body)
        }

        const errorMessage = validationError || fetchError

        const error = errorMessage && (
            <div className="py-2 px-4 mt-3 rounded bg-light-red text-danger">
                {errorMessage}
            </div>
        )

        const resultMessage =
            fetchResult[resultKey] === null
                ? 'Impossibile'
                : fetchResult[resultKey] === 0
                ? '0'
                : fetchResult[resultKey]

        const result = resultMessage && (
            <div className="py-2 px-4 mt-3 rounded bg-secondary text-primary h2">
                {resultMessage}
            </div>
        )

        return (
            <Card className="border-secondary shadow-sm">
                <Card.Body className="text-center">
                    <form onSubmit={handleSubmit}>
                        <Component
                            valA={valA}
                            valB={valB}
                            handleValA={handleValA}
                            handleValB={handleValB}
                        />
                        <div className="mt-3 d-flex justify-content-center">
                            <Button type="submit">Calcola</Button>
                        </div>
                        {result}
                        {error}
                    </form>
                </Card.Body>
            </Card>
        )
    }
    return Calculator
}

export default makeCalculator

import config from '../../../website.config'

import { useState } from 'react'

import { IWrappedComponent } from './IWrappedComponent'
import CalculatorType from './CalculatorType'

import useFetch from '../../../hooks/useFetch'
import LoadingSpinner from '../../shared/LoadingSpinner'

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

        const [doFetch, fetchResult, fetchError, isLoading] = useFetch(
            url,
            'POST'
        )

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
            <div className="card border">
                <div className="card-body text-center">
                    <form
                        onSubmit={
                            !isLoading
                                ? handleSubmit
                                : (e) => {
                                      e.preventDefault()
                                  }
                        }
                    >
                        <Component
                            valA={valA}
                            valB={valB}
                            handleValA={handleValA}
                            handleValB={handleValB}
                        />
                        <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">
                                {isLoading && <LoadingSpinner />}
                                {!isLoading && 'Calcola'}
                            </button>
                        </div>
                        {result}
                        {error}
                    </form>
                </div>
            </div>
        )
    }
    return Calculator
}

export default makeCalculator

/**
 * This component is updated to useCalculate use. But not to new shared component.
 */

import config from '../../../website.config'

import { useState } from 'react'

import { IWrappedComponent } from './IWrappedComponent'
import CalculatorType from './CalculatorType'

import LoadingSpinner from '../../shared/LoadingSpinner'
import useCalculate from '../../../hooks/useCalculate'

let apiUrl = config.CALCULATION_SERVER_API_URL + '/percentage'

const makeCalculator = (
    Component: React.ComponentType<IWrappedComponent>,
    calcType: string
) => {
    const Calculator = () => {
        const [valA, setValA] = useState('')
        const [valB, setValB] = useState('')
        const [isLoading, setIsLoading] = useState(false)

        const [validationError, setValidationError] = useState<string | null>(
            null
        )

        const handleValA = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValA(e.target.value)
        }

        const handleValB = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValB(e.target.value)
        }

        const generateFetchParams = () => {
            let queryParams

            switch (calcType) {
                case CalculatorType.PART:
                    queryParams = { calculate_value: 'PART', x: valA, y: valB }
                    break
                case CalculatorType.PERCENTAGE:
                    queryParams = { calculate_value: 'PERC', x: valA, y: valB }
                    break
                case CalculatorType.WHOLE:
                    queryParams = { calculate_value: 'WHOLE', x: valA, y: valB }
                    break
                default:
                    queryParams = {}
            }

            return queryParams
        }

        const queryParams = generateFetchParams()

        const { calculate, data, error } = useCalculate(apiUrl)

        const isFormValid = valA.trim() && valB.trim()

        const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
            if (!isLoading) {
                e.preventDefault()

                setIsLoading(true)

                if (!isFormValid) {
                    setValidationError('Compila tutti i campi')
                    setIsLoading(false)
                    return
                }

                setValidationError(null)

                await calculate(queryParams)
                setIsLoading(false)
            }
        }

        const errorMessage = validationError || error.message

        const errorComponent = errorMessage && (
            <div className="py-2 px-4 mt-3 rounded bg-light-red text-danger">
                {errorMessage}
            </div>
        )

        const resultMessage =
            data.result === null
                ? 'Impossibile'
                : data.result === 0
                ? '0'
                : data.result

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
                        {errorComponent}
                    </form>
                </div>
            </div>
        )
    }
    return Calculator
}

export default makeCalculator

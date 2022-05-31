import StandardCalculatorError from '../Shared/StandardCalculator.error'

type ComponentProps = {
    errorMessage: string
}

const ConvertitorePesoPastaError = ({ errorMessage }: ComponentProps) => {
    if (errorMessage == undefined) {
        return null
    }

    return <StandardCalculatorError>{errorMessage}</StandardCalculatorError>
}

export default ConvertitorePesoPastaError

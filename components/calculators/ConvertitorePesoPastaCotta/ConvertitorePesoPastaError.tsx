import StandardCalculatorError from '../Shared/StandardCalculator.error'

type ComponentProps = {
    errorMessage: string
}

const ConvertitorePesoPastaError = ({ errorMessage }: ComponentProps) => (
    <StandardCalculatorError>{errorMessage}</StandardCalculatorError>
)

export default ConvertitorePesoPastaError

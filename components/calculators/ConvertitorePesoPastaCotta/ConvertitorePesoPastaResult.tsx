import StandardCalculatorResult from '../Shared/StandardCalculator.result'

type ComponentProps = {
    result: string
}

const ConvertitorePesoPastaResult = ({ result }: ComponentProps) => (
    <StandardCalculatorResult>
        {result}
        <span className="fw-bolder"> g</span>
    </StandardCalculatorResult>
)

export default ConvertitorePesoPastaResult

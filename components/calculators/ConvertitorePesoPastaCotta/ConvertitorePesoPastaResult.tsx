import StandardCalculatorResult from '../Shared/StandardCalculator.result'

type ComponentProps = {
    result: string
}

const ConvertitorePesoPastaResult = ({ result }: ComponentProps) => {
    if (result == undefined) {
        return null
    }

    return (
        <StandardCalculatorResult>
            <span className="fw-bolder"> {result}</span> g
        </StandardCalculatorResult>
    )
}

export default ConvertitorePesoPastaResult

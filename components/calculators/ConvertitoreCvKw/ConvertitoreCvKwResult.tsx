import StandardCalculatorResult from '../Shared/StandardCalculator.result'

type ComponentProps = {
    powerValue: string
    quantity: number
}

const ConvertitoreCvKwResult = ({ quantity, powerValue }: ComponentProps) => {
    if (quantity == undefined) {
        return null
    }

    return (
        <StandardCalculatorResult>
            <span className="fw-bolder"> {quantity.toFixed(2)}</span>
            {` ${powerValue}`}
        </StandardCalculatorResult>
    )
}

export default ConvertitoreCvKwResult

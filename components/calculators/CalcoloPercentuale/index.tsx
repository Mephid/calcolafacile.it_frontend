import CalculatorType from './CalculatorType'

import makeCalculator from './makeCalc'

import CalculatePerc from './CalculatePerc'
import CalculatePart from './CalculatePart'
import CalculateWhole from './CalculateWhole'

const CalcoloPercentuale = () => {
    const CalcOne = makeCalculator(CalculatePart, CalculatorType.PART)
    const CalcTwo = makeCalculator(CalculatePerc, CalculatorType.PERCENTAGE)
    const CalcThree = makeCalculator(CalculateWhole, CalculatorType.WHOLE)

    return (
        <>
            <CalcOne />
            <br />
            <CalcTwo />
            <br />
            <CalcThree />
        </>
    )
}

export default CalcoloPercentuale

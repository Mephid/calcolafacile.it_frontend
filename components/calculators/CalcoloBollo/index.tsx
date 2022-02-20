import config from '../../../website.config'

import CalcForm from './CalcForm'
import useFetch from '../../../hooks/useFetch'
import BolloResult from './BolloResult'

const apiUrl = config.CALCULATION_SERVER_API_URL + '/bollo-auto'

const CalcoloBollo = () => {
    const [doFetch, fetchResult, fetchError, isLoading] = useFetch(
        apiUrl,
        'POST'
    )

    const handleSubmit = ({
        powerUnit,
        euroClass,
        powerValue,
        region,
    }: Record<any, string>) => {
        doFetch({
            unit: powerUnit,
            euroCategory: euroClass,
            power: powerValue,
            region,
        })
    }

    const error = fetchError && (
        <div className="py-2 px-4 mt-3 rounded bg-light-red text-danger text-center">
            {fetchError}
        </div>
    )

    const result = fetchResult.result && (
        <BolloResult result={fetchResult.result} />
    )

    return (
        <section className="calculator-section">
            <div className="card border calc-card-sm">
                <div className="card-body">
                    <CalcForm
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                    {result}
                    {error}
                </div>
            </div>
        </section>
    )
}

export default CalcoloBollo

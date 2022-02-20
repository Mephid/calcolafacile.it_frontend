import { Regions } from './RegionEnum'

interface IRegionsProps {
    value: string
    handler: any
    isInvalid?: boolean
}

const Region = ({ value, handler, isInvalid }: IRegionsProps) => {
    const regions = Object.entries(Regions)

    const regionsOptions = regions.map(([key, value]) => {
        return (
            <option key={key} value={value}>
                {value}
            </option>
        )
    })

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor="region">
                Regione di residenza intestatario
            </label>
            <select
                className={`form-select${isInvalid ? ' is-invalid' : ''}`}
                id="region"
                name="region"
                value={value}
                onChange={handler}
                aria-label="Regione"
            >
                <option value="" disabled>
                    Seleziona una regione
                </option>
                {regionsOptions}
            </select>
            <div className="invalid-feedback">Seleziona una regione.</div>
        </div>
    )
}

export default Region

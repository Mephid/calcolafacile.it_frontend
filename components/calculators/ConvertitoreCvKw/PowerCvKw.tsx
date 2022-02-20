import React from 'react'

interface IPowerProps {
    handler: any
    powerUnit: string
    powerValue: string
    fieldValueSetter: any
    isPowerValueInvalid?: boolean
}

const PowerCvKw = ({
    handler,
    powerUnit,
    powerValue,
    fieldValueSetter,
    isPowerValueInvalid,
}: IPowerProps) => {
    const handleSetCv = () => {
        fieldValueSetter('powerUnit', 'CV')
    }

    const handleSetKw = () => {
        fieldValueSetter('powerUnit', 'kW')
    }

    return (
        <div className="no-min-width-dropdown">
            <label className="form-label" htmlFor="power">
                Potenza
            </label>
            <div className="input-group mb-3 has-validation">
                <input
                    id="power"
                    className={`form-control z-index-3${
                        isPowerValueInvalid ? ' is-invalid' : ''
                    }`}
                    type="number"
                    name="powerValue"
                    value={powerValue}
                    onChange={handler}
                    aria-label="Valore potenza"
                    min="0"
                />

                <select
                    className="btn btn-input-group"
                    title={powerUnit}
                    id="input-group-dropdown-1"
                    aria-label="Unità di misura della potenza"
                    data-bs-toggle="dropdown"
                >
                    <option className="dropdown-item" onClick={handleSetCv}>
                        CV
                    </option>
                    <option className="dropdown-item" onClick={handleSetKw}>
                        kW
                    </option>
                </select>
                <div className="invalid-feedback">
                    Inserisci un valore valido.
                </div>
            </div>
        </div>
    )
}

export default PowerCvKw

import React, { FormEventHandler } from 'react'

import { EuroCategory } from './EuroClassEnum'

interface IEuroClassProps {
    value: string
    handler: any
    isInvalid?: boolean
}

const EuroClass = ({ value, handler, isInvalid }: IEuroClassProps) => {
    const euroClass = Object.entries(EuroCategory)

    const euroClassOptions = euroClass.map(([key, value]) => {
        return (
            <option key={key} value={value}>
                {value}
            </option>
        )
    })

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor="euroClass">
                Categoria Euro
            </label>
            <select
                className={`form-select${isInvalid ? ' is-invalid' : ''}`}
                value={value}
                onChange={handler}
                name="euroClass"
                id="euroClass"
                aria-label="Classe euro"
            >
                <option value="" disabled>
                    Seleziona una classe
                </option>
                {euroClassOptions}
            </select>
            <div className="invalid-feedback">Seleziona una classe.</div>
        </div>
    )
}

export default EuroClass

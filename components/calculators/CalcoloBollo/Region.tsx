import React, { FormEventHandler } from 'react'
import { Form } from 'react-bootstrap'

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
        <Form.Group className="mb-3">
            <Form.Label>Regione di residenza intestatario</Form.Label>
            <Form.Control
                as="select"
                name="region"
                value={value}
                onChange={handler}
                isInvalid={isInvalid}
                aria-label="Regione"
            >
                <option value="" disabled>
                    Seleziona una regione
                </option>
                {regionsOptions}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                Seleziona una regione.
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default Region

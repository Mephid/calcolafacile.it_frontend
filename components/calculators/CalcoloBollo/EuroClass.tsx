import React, { FormEventHandler } from 'react'

import { Form } from 'react-bootstrap'

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
        <Form.Group className="mb-3">
            <Form.Label>Categoria Euro</Form.Label>
            <Form.Select
                value={value}
                onChange={handler}
                name="euroClass"
                isInvalid={isInvalid}
                aria-label="Classe euro"
            >
                <option value="" disabled>
                    Seleziona una classe
                </option>
                {euroClassOptions}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
                Seleziona una classe.
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default EuroClass

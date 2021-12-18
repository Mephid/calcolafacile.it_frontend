import React, { FormEventHandler } from 'react'

import {
    Form,
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown,
} from 'react-bootstrap'

interface IPowerProps {
    handler: any
    powerUnit: string
    powerValue: string
    fieldValueSetter: any
    isPowerValueInvalid?: boolean
}

const Power = ({
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
            <Form.Label htmlFor="power">Potenza</Form.Label>
            <InputGroup className="mb-3 has-validation">
                <FormControl
                    id="power"
                    className="z-index-3"
                    type="number"
                    name="powerValue"
                    value={powerValue}
                    onChange={handler}
                    isInvalid={isPowerValueInvalid}
                    aria-label="Valore potenza"
                    min="0"
                />

                <DropdownButton
                    variant="input-group fixed-button-min-width"
                    title={powerUnit}
                    id="input-group-dropdown-1"
                    aria-label="Unità di misura potenza"
                >
                    <Dropdown.Item onClick={handleSetCv}>CV</Dropdown.Item>
                    <Dropdown.Item onClick={handleSetKw}>kW</Dropdown.Item>
                </DropdownButton>
                <FormControl.Feedback type="invalid">
                    Inserisci un valore valido.
                </FormControl.Feedback>
            </InputGroup>
        </div>
    )
}

export default Power
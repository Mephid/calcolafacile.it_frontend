import React from 'react'

type ComponentProps = {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    onBlur: (e: React.FormEvent<HTMLInputElement>) => void
    value: string
    label: string
    type: string
    id: string
    hasErrors?: boolean
}

const StandardCalculatorInputGroupInput = ({
    hasErrors,
    onChange,
    onBlur,
    value,
    label,
    type,
    id,
}: ComponentProps) => (
    <>
        <input
            className={`form-control z-index-3 ${
                hasErrors ? 'is-invalid' : ''
            }`}
            onChange={onChange}
            aria-label={label}
            onBlur={onBlur}
            value={value}
            type={type}
            id={id}
        />
    </>
)

export default React.memo(StandardCalculatorInputGroupInput)

import React from 'react'

type ComponentProps = {
    feedbackMessage: string
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void
    onBlur: (e: React.FormEvent<HTMLSelectElement>) => void
    options: { value: string; label: string }[]
    value: string
    label: string
    id: string
    hasErrors?: boolean
}

const StandardCalculatorSelect = ({
    feedbackMessage,
    hasErrors,
    onChange,
    options,
    onBlur,
    value,
    label,
    id,
}: ComponentProps) => (
    <div className="mb-3">
        <label className="form-label" htmlFor={id}>
            {label}
        </label>
        <select
            className={`form-select ${hasErrors ? 'is-invalid' : ''}`}
            onChange={onChange}
            aria-label={label}
            onBlur={onBlur}
            value={value}
            id={id}
        >
            {options.map((option) => (
                <option
                    value={option.value}
                    label={option.label}
                    key={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
        <div className="invalid-feedback">{feedbackMessage}</div>
    </div>
)

export default React.memo(StandardCalculatorSelect)

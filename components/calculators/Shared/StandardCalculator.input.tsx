type ComponentProps = {
    feedbackMessage: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    onBlur: (e: React.FormEvent<HTMLInputElement>) => void
    value: string
    label: string
    type: string
    id: string
    hasErrors?: boolean
}

const StandardCalculatorSelect = ({
    feedbackMessage,
    hasErrors,
    onChange,
    onBlur,
    value,
    label,
    type,
    id,
}: ComponentProps) => (
    <div className="mb-3">
        <label className="form-label" htmlFor={id}>
            {label}
        </label>
        <input
            className={`form-control ${hasErrors ? 'is-invalid' : ''}`}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={type}
            id={id}
        />
        <div className="invalid-feedback">{feedbackMessage}</div>
    </div>
)

export default StandardCalculatorSelect

type ComponentProps = {
    feedbackMessage: string
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void
    onBlur: (e: React.FormEvent<HTMLSelectElement>) => void
    options: { value: string; label: string }[]
    value: string
    label: string
    id: string
    hasErrors?: boolean
    style?: string
}

const StandardCalculatorInputGroupSelect = ({
    feedbackMessage,
    hasErrors,
    onChange,
    options,
    onBlur,
    value,
    label,
    id,
}: ComponentProps) => (
    <select
        className={`btn btn-input-group ${hasErrors ? 'is-invalid' : ''}`}
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
)

export default StandardCalculatorInputGroupSelect

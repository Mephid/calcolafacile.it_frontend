import React, { ReactNode } from 'react'

type ComponentProps = {
    children: ReactNode
    label: string
    htmlFor: string
    feedbackMessage: string
}

const StandardCalculatorInputGroupContainer = ({
    feedbackMessage,
    children,
    htmlFor,
    label,
}: ComponentProps) => (
    <div className="no-min-width-dropdown">
        <label className="form-label" htmlFor={htmlFor}>
            {label}
        </label>
        <div className="input-group mb-3 has-validation">
            {children}
            <div className="invalid-feedback">{feedbackMessage}</div>
        </div>
    </div>
)

export default React.memo(StandardCalculatorInputGroupContainer)

import { ReactNode } from 'react'

type ComponentProps = {
    children: ReactNode
}

const StandardCalculatorSection = ({ children }: ComponentProps) => (
    <section className="calculator-section">
        <div className="card border calc-card-sm">
            <div className="card-body">{children}</div>
        </div>
    </section>
)

export default StandardCalculatorSection

import { ReactNode } from 'react'

type ComponentProps = {
    onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void
    children: ReactNode
}

const StandardCalculatorForm = ({ children, onSubmit }: ComponentProps) => (
    <form onSubmit={onSubmit} noValidate>
        {children}
    </form>
)

export default StandardCalculatorForm

import React, { ReactNode } from 'react'

type ComponentProps = {
    children: ReactNode
}

const StandardCalculatorError = ({ children }: ComponentProps) => (
    <div className="py-2 px-4 mt-3 rounded bg-light-red text-danger text-center">
        {children}
    </div>
)

export default React.memo(StandardCalculatorError)

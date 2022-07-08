import React, { ReactNode } from 'react'

type ComponentProps = {
    children: ReactNode
}

const StandardCalculatorResult = ({ children }: ComponentProps) => (
    <div className="py-2 px-4 mt-3 rounded bg-secondary text-primary text-center">
        {children}
    </div>
)

export default React.memo(StandardCalculatorResult)

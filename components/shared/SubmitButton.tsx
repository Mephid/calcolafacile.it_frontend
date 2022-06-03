import { ReactNode } from 'react'
import LoadingSpinner from './LoadingSpinner'

type ComponentProps = {
    children: ReactNode
    isSubmitting: boolean
    className?: string
}

const SubmitButton = ({
    children,
    isSubmitting,
    className,
}: ComponentProps) => (
    <button
        className={`btn btn-primary btn-submit ${className}`}
        type="submit"
        disabled={isSubmitting}
    >
        {isSubmitting ? <LoadingSpinner /> : children}
    </button>
)

export default SubmitButton

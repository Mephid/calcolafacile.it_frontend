import { ReactNode } from 'react'
import LoadingSpinner from './LoadingSpinner'

type ComponentProps = {
    children: ReactNode
    isSubmitting: boolean
}

const SubmitButton = ({ children, isSubmitting }: ComponentProps) => (
    <button
        className="btn btn-primary btn-submit"
        type="submit"
        disabled={isSubmitting}
    >
        {isSubmitting ? <LoadingSpinner /> : children}
    </button>
)

export default SubmitButton

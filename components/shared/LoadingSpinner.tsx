import { Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
    return (
        <Spinner className="spinner-md" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default LoadingSpinner

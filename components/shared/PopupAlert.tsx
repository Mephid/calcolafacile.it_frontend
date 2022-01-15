import { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'

interface IToastAlertProps {
    variant: string
    message: string
    isDismissible?: boolean
    timer?: number
}

const PopupAlert = ({
    variant,
    message,
    isDismissible = false,
    timer,
}: IToastAlertProps) => {
    const [show, setShow] = useState(true)

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (timer) {
            timeout = setTimeout(handleClose, timer)
        }
        return () => {
            if (timer) {
                clearTimeout(timeout)
            }
        }
    }, [timer])

    return (
        <Alert
            show={show}
            className="fixed-bottom alert__message text-center fade"
            variant={variant || 'success'}
            dismissible={isDismissible}
            onClose={handleClose}
        >
            {message}
        </Alert>
    )
}

export default PopupAlert

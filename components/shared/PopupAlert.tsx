import { useState, useEffect } from 'react'

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
        <div
            className={`fade fixed-bottom alert__message text-center fade alert ${
                isDismissible ? 'alert-dismissible' : ''
            } ${show ? 'show' : ''} alert-${variant || 'success'}`}
            role="alert"
        >
            {isDismissible && (
                <button
                    onClick={handleClose}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            )}
            {message}
        </div>
    )
}

export default PopupAlert

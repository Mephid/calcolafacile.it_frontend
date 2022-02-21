import React from 'react'
import Link from 'next/link'

type Props = {
    children: React.ReactNode
}

type State = {
    hasError: boolean
}

class ErrorLogger extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        /* Send notification */

        console.log(error, errorInfo)
    }

    public render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Si è verificato un errore</h1>
                    <Link href={'/'}>
                        <a>Torna alla home</a>
                    </Link>
                </>
            )
        }

        return this.props.children
    }
}

export default ErrorLogger

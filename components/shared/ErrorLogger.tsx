import { withRouter, NextRouter } from 'next/router'

import Head from './Head'

import React from 'react'
import Link from 'next/link'
import config from '../../website.config'

type Props = {
    children: React.ReactNode
    router: NextRouter
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

        /*  Get more info es. page name */

        const messageBody = {
            errorMessage: error.message,
            errorName: error.name,
            errorStack: error.stack,
            errorInfo: errorInfo,
            page: this.props.router.asPath,
        }

        const data = {
            content: JSON.stringify(messageBody),
            senderEmail: 'errorLogger@calcolafacile.it',
            subject: error.message,
            senderName: 'Error Logger',
        }

        fetch(config.CONTACTS_SERVER_API_URL + '/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    public render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <>
                    <Head
                        pageTitle="Errore | CalcolaFacile.it"
                        metaDesc={'Si è verificato un errore.'}
                    />
                    <div className="p-4">
                        <h3>Si è verificato un errore</h3>
                        <Link href={'/'}>
                            <a>Torna alla home</a>
                        </Link>
                    </div>
                </>
            )
        }

        return this.props.children
    }
}

export default withRouter(ErrorLogger)

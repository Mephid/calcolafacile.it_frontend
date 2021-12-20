import { useReducer, useEffect, useMemo } from 'react'

const errorMessage = {
    FETCH: 'Si è verificato un errore.',
    SERVER: 'Errore del server.',
}

type useFetchOutput = [
    (body?: Record<any, any>) => Promise<void>,
    Record<any, any>,
    string,
    boolean
]

const reducer = (
    state: {
        error: string
        result: Record<any, any>
        isLoading: boolean
    },
    action: Record<any, any>
) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                error: '',
                result: action.payload.result,
                isLoading: false,
            }
        case 'FETCH_ERROR':
            return {
                error: errorMessage.FETCH,
                result: {},
                isLoading: false,
            }
        case 'SERVER_ERROR':
            return {
                error: errorMessage.SERVER,
                result: {},
                isLoading: false,
            }
        case 'LOADING':
            return {
                error: '',
                result: {},
                isLoading: true,
            }
        default:
            return state
    }
}

const useFetch = (url: string, method?: string): useFetchOutput => {
    const [state, dispatch] = useReducer(reducer, {
        error: '',
        result: {},
        isLoading: false,
    })

    const controller = useMemo(() => {
        if (window) {
            return new window.AbortController()
        }
    }, [])

    useEffect(() => {
        return () => {
            if (controller) {
                controller.abort()
            }
        }
    }, [controller])

    const doFetch = async (body?: Record<any, any>) => {
        const reqOptions: {
            method: string
            headers: Record<string, string>
            body?: string
        } = {
            method: method || 'GET',
            headers: { 'Content-Type': 'application/json' },
        }

        if (body) {
            reqOptions.body = JSON.stringify(body)
        }

        dispatch({ type: 'LOADING' })

        try {
            const response = await fetch(url, {
                signal: controller && controller.signal,
                ...reqOptions,
            })

            if (response) {
                if (response.ok) {
                    const responseObject = await response.json()
                    dispatch({
                        type: 'SUCCESS',
                        payload: { result: responseObject },
                    })
                } else {
                    dispatch({ type: 'SERVER_ERROR' })
                }
            }
        } catch (err) {
            if (err instanceof Error) {
                if (!(err.name === 'AbortError')) {
                    dispatch({ type: 'FETCH_ERROR' })
                }
            }
        }
    }

    return [doFetch, state.result, state.error, state.isLoading]
}

export default useFetch

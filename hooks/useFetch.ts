import { useEffect, useState, useReducer } from 'react'

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

const useFetch = (url: string, method?: string): useFetchOutput => {
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

    const [state, dispatch] = useReducer(reducer, {
        error: '',
        result: {},
        isLoading: false,
    })

    const reqOptions: {
        method: string
        headers: Record<string, string>
        body?: string
    } = {
        method: method || 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    const doFetch = async (body?: Record<any, any>) => {
        if (body) {
            reqOptions.body = JSON.stringify(body)
        }

        dispatch({ type: 'LOADING' })

        try {
            const response = await fetch(url, reqOptions)

            if (response.ok) {
                const responseObject = await response.json()
                dispatch({
                    type: 'SUCCESS',
                    payload: { result: responseObject },
                })
            } else {
                dispatch({ type: 'SERVER_ERROR' })
            }
        } catch (err) {
            dispatch({ type: 'FETCH_ERROR' })
        }
    }

    return [doFetch, state.result, state.error, state.isLoading]
}

export default useFetch

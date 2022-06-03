import { useEffect, useCallback, useRef, useState } from 'react'
import generateUrlWithQueryParams from '../lib/generateUrlWithQueryParams'

/**
 * With useCalculate we can setup a fetch function that can be called imperatively.
 * That function will store fetch result in the exposed data and error objects.
 */

function useCalculate(baseUrl: string): {
    data: Record<any, any>
    error: Record<any, any>
    calculate: (queryParams: Record<any, any>) => Promise<void>
} {
    /**
     * We need an abort controller to interrupt ongoing requests if the component unmounts.
     * useEffect return statement runs as a cleanup on component unmount, so it should be the right place.
     */
    const [data, setData] = useState<Record<any, any>>({})
    const [error, setError] = useState<Record<any, any>>({})
    const controller = useRef<AbortController>()

    useEffect(() => {
        controller.current = new AbortController()

        return () => {
            controller.current?.abort()
        }
    }, [])

    const calculate = useCallback(
        async (queryParams: Record<any, any>) => {
            const urlWithQueryParams = generateUrlWithQueryParams(
                baseUrl,
                queryParams
            )
            try {
                const fetchResponse = await fetch(urlWithQueryParams, {
                    signal: controller.current?.signal,
                })
                if (fetchResponse.ok) {
                    const res = await fetchResponse.json()
                    setData(res)
                    setError({})
                } else {
                    throw new Error('API call went wrong')
                }
            } catch (error) {
                setError({ message: 'Si è verificato un errore.' })
                setData({})
            }
        },
        [baseUrl]
    )

    return { data, error, calculate }
}

export default useCalculate

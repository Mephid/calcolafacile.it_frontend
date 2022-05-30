import { useEffect, useMemo, useRef, useState } from 'react'
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
     * useFetch return statement runs as a cleanup on component unmount, so it should be the right place.
     */

    const controller = useRef<AbortController>()
    useEffect(() => {
        if (!controller.current) {
            controller.current = new AbortController()
        }

        return () => {
            if (controller.current) {
                controller.current.abort()
            }
        }
    }, [controller])

    const [data, setData] = useState<Record<any, any>>({})
    const [error, setError] = useState<Record<any, any>>({})

    const calculate = async (queryParams: Record<any, any>) => {
        const urlWithQueryParams = generateUrlWithQueryParams(
            baseUrl,
            queryParams
        )
        const fetchResponse = await fetch(urlWithQueryParams, {
            signal: controller.current?.signal,
        })
        if (fetchResponse.ok) {
            const res = await fetchResponse.json()
            setData(res)
            setError({})
        } else {
            setError({ message: 'Si è verificato un errore.' })
            setData({})
        }
    }

    return { data, error, calculate }
}

export default useCalculate

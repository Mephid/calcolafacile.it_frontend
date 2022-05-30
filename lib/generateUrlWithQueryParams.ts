export default function generateUrlWithQueryParams(
    baseUrl: string,
    queryParams: Record<any, any>
): string {
    const resultUrl = new URL(baseUrl)

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            const trimmedKey = key.trim()
            const trimmedValue = value.trim()

            resultUrl.searchParams.append(trimmedKey, trimmedValue)
        }
    }

    return resultUrl.toString()
}

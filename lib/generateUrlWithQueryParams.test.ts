import generateUrlWithQueryParams from './generateUrlWithQueryParams'

describe('generateUrlWithQueryParams', () => {
    it('should return a url with query parameters if an object is passed', () => {
        const composedUrl = generateUrlWithQueryParams(
            'https://test-url.com/api',
            { param1: 'test 1 ', param2: 'test 2' }
        )
        expect(composedUrl).toMatch(
            'https://test-url.com/api?param1=test+1&param2=test+2'
        )
    })
    it('should return the base url only if an empty object is passed', () => {
        const composedUrl = generateUrlWithQueryParams(
            'https://test-url.com/api',
            {}
        )
        expect(composedUrl).toMatch('https://test-url.com/api')
    })
})

export {}

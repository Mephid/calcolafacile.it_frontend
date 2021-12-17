import fetchCalculatorsFileNames from './fetchCalculatorsFileNames'

const fetchCalculatorsMetaObjects = async () => {
    const calculators = await fetchCalculatorsFileNames()

    return Promise.all(
        calculators.map(async (calcFileName) => {
            const { meta } = await import(
                '../../pages/calcolatori/' + calcFileName
            )

            const slug = calcFileName.split('.')[0]

            return {
                title: meta.title,
                desc: meta.description,
                slug: slug,
            }
        })
    )
}

export default fetchCalculatorsMetaObjects

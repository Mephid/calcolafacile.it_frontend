interface IBolloResultProps {
    result: string
}

const BolloResult = ({ result }: IBolloResultProps) => {
    let [int, float] = result.split('.')

    if (float) {
        float = float.substring(0, 2)
    }

    return (
        <>
            <div className="py-2 px-4 mt-3 rounded bg-secondary text-primary  text-center">
                <span className="fs-2  fw-bolder">{int}</span>
                <span className="fs-5  fw-bolder">{',' + float}</span>
                <span className="fs-2">{' €'}</span>
                <span className="fs-5">{'/anno*'}</span>
            </div>
            <div className="mt-3 paragraph-secondary paragraph-xs">
                *Il valore è da ritenersi indicativo. Il costo del bollo auto
                può variare a seconda di diversi fattori. Per conoscere la cifra
                esatta rivolgersi all&apos;ufficio competente.
            </div>
        </>
    )
}

export default BolloResult

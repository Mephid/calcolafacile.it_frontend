import Head from './Head'

interface ISimplePageBody {
    children: JSX.Element
    title: string
    desc: string
    showDesc?: boolean
}

const CalculatorPageContainer = ({
    children,
    title,
    desc,
    showDesc = true,
}: ISimplePageBody) => {
    const descriptionSubtitle = showDesc && (
        <div className="paragraph-secondary">{desc}</div>
    )

    /* TODO: hr between title and text? Title centered?? */

    return (
        <>
            <Head pageTitle={title} metaDesc={desc} />
            <div className="container padding-navbar pb-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 pt-4 pt-md-5">
                        <h1>{title}</h1>
                        {descriptionSubtitle}
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculatorPageContainer

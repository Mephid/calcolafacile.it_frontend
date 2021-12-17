import { Container, Row, Col } from 'react-bootstrap'

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
            <Container className="padding-navbar pb-5">
                <Row className="justify-content-center">
                    <Col md={10} className="pt-4 pt-md-5">
                        <h1>{title}</h1>
                        {descriptionSubtitle}
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CalculatorPageContainer

import Card from 'react-bootstrap/Card'

import Link from 'next/link'

interface IShowcaseCardProps {
    title: string
    description: string
    slug: string
}

/*  TODO: shadow on hover? Link w/o underline */

const ShowcaseCard = ({ title, description, slug }: IShowcaseCardProps) => {
    return (
        <Card className="border">
            <Card.Body className="fs-6">
                <Card.Title className={'fs-5'} as={'h3'}>
                    {title}
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <div className="card__link">
                <Link href={'/calcoli/' + slug} passHref>
                    <a className="stretched-link btn btn-solo-text">
                        Vai al calcolatore &rarr;
                    </a>
                </Link>
            </div>
        </Card>
    )
}

export default ShowcaseCard

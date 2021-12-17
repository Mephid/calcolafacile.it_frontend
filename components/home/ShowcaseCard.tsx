import { Card, Button } from 'react-bootstrap'

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
                <Link href={'/calcolatori/' + slug} passHref>
                    <Button variant="solo-text" className="stretched-link">
                        Vai al calcolatore &rarr;
                    </Button>
                </Link>
            </div>
        </Card>
    )
}

export default ShowcaseCard

import { Card, Button } from 'react-bootstrap'

interface IShowcaseCardProps {
    title: string
    description: string
}

const ShowcaseCard = ({ title, description }: IShowcaseCardProps) => {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title className="pb-2">{title}</Card.Title>
                <Card.Text className="paragraph-secondary">
                    {description}
                </Card.Text>
                <Button
                    variant="solo-text"
                    className="text-uppercase float-end stretched-link"
                >
                    Vai al calcolatore
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ShowcaseCard

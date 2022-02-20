import Link from 'next/link'

interface IShowcaseCardProps {
    title: string
    description: string
    slug: string
}

/*  TODO: shadow on hover? Link w/o underline */

const ShowcaseCard = ({ title, description, slug }: IShowcaseCardProps) => {
    return (
        <div className="card border">
            <div className="card-body fs-6">
                <h3 className="card-title fs-5">{title}</h3>
                <p className="card-text">{description}</p>
            </div>
            <div className="card__link">
                <Link href={'/calcoli/' + slug} passHref>
                    <a className="stretched-link btn btn-solo-text">
                        Vai al calcolatore &rarr;
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ShowcaseCard

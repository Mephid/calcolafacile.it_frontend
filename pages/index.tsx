import type { GetStaticProps, NextPage } from 'next'

import Hero from '../components/home/Hero'
import Showcase from '../components/home/Showcase'
import Contacts from '../components/home/Contacts'

interface IHomeProps {
    calculatorsData: { title: string; desc: string }[]
}

const Home: NextPage<IHomeProps> = ({ calculatorsData }) => {
    return (
        <>
            <Hero />
            <main>
                <Showcase calculatorsData={calculatorsData} />
            </main>
            <Contacts />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    /* Fetch data from external API */

    const CALCULATORS = [
        {
            title: 'Title 12',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nobis cum similique atque voluptatum non amet.',
        },
        {
            title: 'Title 23',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nobis cum similique atque voluptatum non amet.',
        },
        {
            title: 'Title 3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nobis cum similique atque voluptatum non amet.',
        },
        {
            title: 'Title 124',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nobis cum similique atque voluptatum non amet.',
        },
        {
            title: 'Title 2364',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nobis cum similique atque voluptatum non amet.',
        },
        {
            title: 'Title 678',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia nobis cum similique atque voluptatum non amet.',
        },
    ]

    return {
        props: { calculatorsData: CALCULATORS },
    }
}

export default Home

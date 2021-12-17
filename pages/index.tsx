import type { GetStaticProps, NextPage } from 'next'

import fetchCalculatorsMetaObjects from '../lib/dataFetching/fetchCalculatorsMetaObjects'

import Head from '../components/shared/Head'
import Hero from '../components/home/Hero'
import Showcase from '../components/home/Showcase'
import Contacts from '../components/home/Contacts'

interface IHomeProps {
    calculatorsData: { title: string; desc: string; slug: string }[]
}

const Home: NextPage<IHomeProps> = ({ calculatorsData }) => {
    return (
        <>
            <Head
                pageTitle="CalcolaFacile.it - Tanti calcolatori a portata di mano"
                metaDesc={
                    'Una raccolta di calcolatori utilizzabili direttamente online.'
                }
            />
            <Hero />
            <main>
                <Showcase calculatorsData={calculatorsData} />
            </main>
            <Contacts />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const metaObjects = await fetchCalculatorsMetaObjects()

    return {
        props: { calculatorsData: metaObjects },
    }
}

export default Home

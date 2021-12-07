import { Container } from 'react-bootstrap'

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'

import calculators from '../../components/calculators'

const FallbackCalculator = dynamic(
    () => import('../../components/calculators/Fallback')
)

interface ICalculatorProps {
    calcData: {
        title: string
        description: string
        calcName: string
        content: string
    }
}

const Calculator: NextPage<ICalculatorProps> = ({ calcData }) => {
    const Calculator = calculators[calcData.calcName] || FallbackCalculator

    return (
        <>
            <main className="py-4 margin-navbar">
                <Container>
                    <h1 className="title-xl pb-1">{calcData.title}</h1>
                    <p className="paragraph-lg mb-0">{calcData.description}</p>
                    <section className="my-5 calculator-section">
                        <Calculator />
                    </section>
                    <section>{calcData.content}</section>
                </Container>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    /* Fetch data from external API */

    const calcData = {
        title: 'Titolo',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit libero deleniti tempore non, vero.',
        calcName: params!.calculatorName,
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit libero deleniti tempore non, vero consequuntur omnis ad qui iure magni inventore totam eum neque doloremque magnam. Impedit natus inventore doloremque.',
    }

    return {
        props: { calcData },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const calculatorsNames = Object.keys(calculators)

    return {
        paths: calculatorsNames.map((calcName) => ({
            params: { calculatorName: calcName },
        })),
        fallback: false,
    }
}

export default Calculator

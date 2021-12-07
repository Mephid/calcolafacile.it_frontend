import dynamic from 'next/dynamic'

interface StringKeyObject {
    [key: string]: any
}

const calculators: StringKeyObject = {
    'calcolo-percentuale': dynamic(() => import('./CalcoloPercentuale')),
    'bollo-auto': dynamic(() => import('./CalcoloBollo')),
    'convertitore-cv-kw': dynamic(() => import('./ConvertitoreKwCV')),
}

export default calculators

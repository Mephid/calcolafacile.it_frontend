import fs from 'fs'
import path from 'path'

const fetchCalculatorsFileNames = async () => {
    const calculatorPath = path.join(process.cwd(), 'pages', 'calcoli')

    const calculatorsFileNames = await fs.promises.readdir(calculatorPath)

    return calculatorsFileNames
}

export default fetchCalculatorsFileNames

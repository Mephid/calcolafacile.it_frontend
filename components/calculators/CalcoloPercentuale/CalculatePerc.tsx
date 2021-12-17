import { IWrappedComponent } from './IWrappedComponent'

const CalculatePerc = ({
    valA,
    valB,
    handleValA,
    handleValB,
}: IWrappedComponent) => {
    return (
        <>
            <div className="mb-3 mb-md-0 d-sm-inline">
                A quale percentuale di
                <input
                    className="mx-2 inline-input form-control"
                    type="number"
                    value={valA}
                    onChange={handleValA}
                    min="0"
                    step="0.0001"
                    aria-label="Intero"
                />
            </div>
            <div className="d-sm-inline">
                corrisponde
                <input
                    className="mx-2 inline-input form-control"
                    type="number"
                    value={valB}
                    onChange={handleValB}
                    min="0"
                    step="0.0001"
                    aria-label="Parte"
                />
                ?
            </div>
        </>
    )
}

export default CalculatePerc

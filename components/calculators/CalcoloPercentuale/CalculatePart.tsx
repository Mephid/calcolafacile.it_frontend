import { IWrappedComponent } from './IWrappedComponent'

const CalculatePart = ({
    valA,
    valB,
    handleValA,
    handleValB,
}: IWrappedComponent) => {
    return (
        <>
            <div className="mb-3 mb-md-0 d-sm-inline">
                Qual è il
                <div className="mx-2 inline-input-group input-group">
                    <input
                        className="form-control"
                        type="number"
                        value={valA}
                        onChange={handleValA}
                        min="0"
                        step="0.0001"
                    />
                    <span className="input-group-text" id="basic-addon1">
                        %
                    </span>
                </div>
            </div>
            <div className="d-sm-inline">
                di
                <input
                    className="mx-2 inline-input form-control"
                    type="number"
                    value={valB}
                    onChange={handleValB}
                    min="0"
                    step="0.0001"
                />
                ?
            </div>
        </>
    )
}

export default CalculatePart

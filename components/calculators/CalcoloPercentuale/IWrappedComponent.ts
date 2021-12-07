export interface IWrappedComponent {
    valA: string
    valB: string
    handleValA: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleValB: (e: React.ChangeEvent<HTMLInputElement>) => void
}

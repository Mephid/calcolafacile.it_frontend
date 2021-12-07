import Footer from './Footer'
import Navbar from './Navbar'

interface ILayoutProps {
    children: JSX.Element
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout

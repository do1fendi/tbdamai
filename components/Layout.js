import Header from './Header/Header'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

export default function Layout({children}) {
    return (
        <div>
            <Nav />
            <Header />
            {children}
            <Footer />
        </div>
    )
}


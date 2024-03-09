import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
function Error() {
    return(
        <>
        <Header />
        <p>404</p>
        <p>Page not found</p>
        <a href="/your-profile-react/">Return to homepage</a>
        <Footer />        
        </>
    )
}

export { Error }
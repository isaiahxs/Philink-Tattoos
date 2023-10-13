import Navigation from '../Navigation';
import Hero from '../Hero';
import Services from '../Services';
import Footer from '../Footer';
import './HomePage.css'

export default function HomePage() {
    return (
        <div>
            <Navigation />

            <Hero />

            <Services />

            {/* <CombinedMenu /> */}

            {/* <Reviews /> */}

            <Footer />
        </div>
    )
}
import Navigation from '../Navigation';
import Hero from '../Hero';
import Gallery from '../Gallery';
import Services from '../Services';
import Footer from '../Footer';
import './HomePage.css'

export default function HomePage() {
    return (
        <div>
            <Navigation />

            <Hero />

            <Gallery />

            <Services />

            {/* <CombinedMenu /> */}

            {/* <Reviews /> */}

            <Footer />
        </div>
    )
}
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact"; 
import Footer from "../components/Footer";

function Home () {
    return (
        <>
        <Hero/>
        <About/>
        <Services/>
        <Reviews/>
        <Contact/>
        <Footer/>
        </>
    )

}
export default Home
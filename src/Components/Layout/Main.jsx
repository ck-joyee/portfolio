import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Work from "../Work/Work";



const Main = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header/>
            <Banner/>
            <Navbar/>
            <About/>
            <Services/>
            <Work/>
            <Contact/>            
        </div>
    );
};

export default Main;
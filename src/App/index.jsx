import './App.css'
import Header from "../pages/Header/Header";
import Banner from "../pages/Banner";
import VisionMap from '../pages/VisionMap';
import FAQ from "../pages/FAQ";
import Team from '../pages/Team'
import Footer from '../pages/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <VisionMap />
            <FAQ />
            <Team />
            <Footer />
        </div>
    )
}

export default App;
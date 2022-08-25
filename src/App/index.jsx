import './App.css'
import Header from "../pages/Header/Header";
import Video from "../pages/video/Video";
import Tastepage from "../pages/Tastepage/Tastepage";
import VisionMap from '../pages/VisionMap';
import FAQ from "../pages/FAQ";
import Team from '../pages/Team'
import Footer from '../pages/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Video />
            <Tastepage />
            <VisionMap />
            <FAQ />
            <Team />
            <Footer />
        </div>
    )
}


export default App;
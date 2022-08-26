import styled from "styled-components";

import Header from "./pages/Header";
import Banner from "./pages/Banner";
import TasteMakers from "./pages/TasteMakers";
import VisionMap from './pages/VisionMap';
import FAQ from "./pages/FAQ";
import Team from './pages/Team'
import Footer from './pages/Footer';

const App = () => {
    return (
        <Container>
            <Header />
            <Banner />
            <TasteMakers/>
            <VisionMap />
            <FAQ />
            <Team />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Rubik,Arial,sans-serif;
    font-weight: 800;
    letter-spacing: .03em;
`

export default App;
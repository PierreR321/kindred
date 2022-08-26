import styled from "styled-components";

import Header from "./pages/Header";
import Banner from "./pages/Banner";
import VisionMap from './pages/VisionMap';
import FAQ from "./pages/FAQ";
import Team from './pages/Team'
import Footer from './pages/Footer';

const App = () => {
    return (
        <Container>
            <Header />
            <Banner />
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
`

export default App;
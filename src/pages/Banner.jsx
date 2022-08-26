import styled from 'styled-components'

import {desktop, mobile} from "../utils"

const Banner = () => {
    return (
        <Container>
            <BannerVideo autoPlay loop muted preload="none">
                <source src="/video/banner.mp4" type="video/mp4"></source>
            </BannerVideo>
            <SpiritBox>
                <SpiritBoxText>SPIRIT BOX</SpiritBoxText>
            </SpiritBox>
        </Container >
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const BannerVideo = styled.video`
    width: 100%;
    height: 640px;
    object-fit: cover;
    padding-top: 84px;
    ${desktop} {
        padding-top: 60px;
    }
`

const SpiritBox = styled.div`
    position: absolute;
    top: 380px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const SpiritBoxText = styled.div`
    width: 360px;
    height: 70px;
    border: 1px solid #fff;
    border-radius: 0.5rem;
    background-color: #fff;
    opacity: 0.4;   
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #Ec5b8f;   
    font-weight: 1000;
    font-family: 'Rubik Arial san-serif';
    line-height: 1;
    font: bold;
    font-size: 48px;
    :hover{
        opacity: 1;
        transition: 0.5s;
    }
`

export default Banner;

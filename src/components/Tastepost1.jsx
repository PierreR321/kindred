import styled from "styled-components";
import {useDispatch} from 'react-redux'
import { tastepost1,tastepost0 } from '../reduxex/action/kind'

const Tastepost1 = () => {
    const mydispatch = useDispatch();

    return (
        <Container onMouseOver={() => mydispatch(tastepost1())} onMouseLeave={() => mydispatch(tastepost0())}>
            <Description>
                <DescriptionTitle>
                    OUR 1ST TASTEMAKERS11111111
                </DescriptionTitle>
                <DescriptionText>
                    Kindred Spirits is collective for artists to collaborate on exclusive web3 projects.
                </DescriptionText>
                <DescriptionText>
                    The community select the tastemakers; the tastemakers set the vibe and execute the art.
                </DescriptionText>
            </Description>
            <TasteMaker >
                <TasteMakerImg src="img/zoe.png" ></TasteMakerImg>
                <TasteMakerName>ZOE WINTERS</TasteMakerName>
            </TasteMaker>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    display: flex;
    transition: 1s;
    justify-content: center;
`

const Description = styled.div`
    width: 380px;
    height: 200px;
    text-align: center;
    padding: 24px 32px;
    border-radius: 3rem;
    background: #f7dec5b3;
`

const DescriptionTitle = styled.h3`

`

const DescriptionText = styled.p`

`

const TasteMaker = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    align-items: end;
`

const TasteMakerImg = styled.img`
    width: 234px;
    height: 234px;
    object-fit: cover;
    border-radius: 3rem;
`

const TasteMakerName = styled.h3`
    display: inherit;
    font-size: 30px;
    color: #ec5b8f;
`


export default Tastepost1;
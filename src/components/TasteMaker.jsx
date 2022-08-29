import styled from "styled-components";

import { desktop, mobile } from "../utils";

const TasteMaker = (props) => {
    return (
        <Container onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
            <TMImg src={props.src} />
            <TMName>{props.name}</TMName>
            <TMType>{props.type}</TMType>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 0 0 50px;
    ${mobile} {
        margin-left: 0;
        padding: 24px 0 12px;
    }
    color: #EC5B8F;
    text-align: right;
    display: flex;
    flex-direction: column;

    transition: opacity .8s ease 0s,width .8s ease 0s;
    transition-property: opacity, width;
    transition-duration: 0.8s, 0.8s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;

    cursor: pointer;
`

const TMImg = styled.img`
    width: 234px;
    height: 234px;
    ${desktop}{
        width: 180px;
        height: 180px;
    }
    ${mobile} {
        width: 324px;
        height: 324px;
    }
    border-radius: 3rem;
    object-fit: cover;
`

const TMName = styled.span`
    font-size: 30px;
    padding-top: 0.25rem;
`

const TMType = styled.span`
    font-size: 16px;
`

export default TasteMaker;
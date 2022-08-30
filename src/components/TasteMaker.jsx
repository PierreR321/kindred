import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 300ms ease-in;
  }
`;
const Container = styled.div`
    margin: 0 0 0 50px;
    ${desktop} {
        margin-left: 0;
        padding: 24px 0 12px;
    }
    color: #EC5B8F;
    text-align: right;
    display: flex;
    flex-direction: column;

    cursor: pointer;
`

const TMImg = styled.img`
    width: 234px;
    height: 234px;
    ${desktop}{
        width: 400px;
        height: 400px;
    }
    ${mobile} {
        width: 300px;
        height: 300px;
    }
    border-radius: 3rem;
    object-fit: cover;
`

const TMName = styled.span`
    font-size: 30px;
    padding-top: 0.25rem;
    ${desktop}{
        font-size: 16px;
    }
`

const TMType = styled.span`
    font-size: 16px;
    ${desktop}{
        font-size: 8px;
    }
`

export default TasteMaker;
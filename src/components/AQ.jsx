import styled from "styled-components";
import { useState } from "react";

import { desktop } from "../utils";

const AQ = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <Container onClick={() => setIsCollapsed(!isCollapsed)}>
            <Question>
                <QuestionText>{props.question}</QuestionText>
                <PlusIcon className=" fa-solid fa-plus" isCollapsed={isCollapsed}/>
                <MinusIcon className=" fa-solid fa-minus" isCollapsed={isCollapsed}/>
            </Question>
            <Answer isCollapsed={isCollapsed}>{props.answer}</Answer>
        </Container>
    )
}

const Container = styled.div`
    width: 800px;
    ${desktop} {
        width: calc(100% - 80px);
    }
    text-align: center;
    background: #fff3ed;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 8px;
    padding: 12px 12px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
`

const Question = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
`

const QuestionText = styled.span`
    font-size: 25.6px;
    flex: 99;
`

const Answer = styled.div`
    width: 80%;
    margin: 8px 0 0;
    padding: 8px 24px;
    background: #f7dec5;
    color: #271f18;
    font-weight: 300;
    font-size: 20px;
    border-radius: 0.75rem;
    display: ${(props) => props.isCollapsed ? "none" : "initial"};
`

const MinusIcon = styled.i`
    margin: 0 10px;
    width: 24px;
    height: 24px;
    flex: 1;
    color:  rgb(149, 103, 103);
    display: ${(props) => props.isCollapsed ? 'none' : "initial"};
`
const PlusIcon = styled.i`
    margin: 0 10px;
    width: 24px;
    height: 24px;
    flex: 1;
    color:  rgb(149, 103, 103);
    display: ${(props) => props.isCollapsed ? 'initial' : "none"};

`
export default AQ;
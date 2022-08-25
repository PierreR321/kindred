import styled from "styled-components";
import { useState } from "react";

const AQ = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <Container onClick={() => setIsCollapsed(!isCollapsed)}>
            <Question>
                <QuestionText>{props.question}</QuestionText>
                <ExtendButton isCollapsed={isCollapsed} />
            </Question>
            <Answer isCollapsed={isCollapsed}>{props.answer}</Answer>
        </Container>
    )
}

const Container = styled.div`
    width: 800px;
    text-align: center;
    background: #fff3ed;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 8px;
    padding: 12px 0;
    border-radius: 0.5rem;
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
    width: 640px;
    margin: 8px 0 0;
    padding: 8px 24px;
    background: #f7dec5;
    color: #271f18;
    font-weight: 300;
    font-size: 20px;
    border-radius: 0.75rem;
    display: ${(props) => props.isCollapsed ? "none" : "initial"}
`

const ExtendButton = styled.button`
    margin: 0 10px;
    width: 24px;
    height: 24px;
    flex: 1;
    background: ${(props) => props.isCollapsed ? "black" : "white"}
`
export default AQ;
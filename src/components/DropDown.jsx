import styled from "styled-components";

const DropDown = (props) => {
    return (
        <Container isShown={props.isShown}>
            <DDTerm>MINT</DDTerm>
            <DDTerm>TASTEMAKERS</DDTerm>
            <DDTerm>VISION MAP</DDTerm>
            <DDTerm>FAQ</DDTerm>
            <DDTerm>TEAM</DDTerm>
            <DDTerm>DISCORD</DDTerm>
            <DDTerm>TWITTER</DDTerm>
            <DDTerm>MEDIUM</DDTerm>
            <DDTerm>CONNECT WALLET</DDTerm>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    display: ${(props) => props.isShown ? "inherit" : "none"};
    padding: 100px 18px 0;
    background: rgb(255, 243, 237);
    opacity: 0.7;
    text-align: left;
    display: flex;
    flex-direction: column;
`

const DDTerm = styled.div`
    color: #956767;
    font-size: 22.5px;
    padding: 10.5px 0;
    border-bottom: 1px solid black;
    margin-left: 12px;
    margin-right: 12px;
`

export default DropDown;
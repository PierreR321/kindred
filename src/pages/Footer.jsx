import styled from "styled-components";

const Footer = () => {
    return (
        <Container id="footer">
            <FooterText>
                "Maybe if we loved ourselves… it wouldn't be so hard to love each other."
                <br />
                Skizzy Mars, “Numb.” Pace. 2014.
            </FooterText>
            <FooterSocial>
            <i className="discord fa-brands fa-discord" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "20px",
            padding: "0 16px",
            color: "rgb(149, 103, 103)",
            cursor: "pointer"
          }} />
          <i className="twitter fa-brands fa-twitter" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            padding: "0 16px",
            color: "rgb(149, 103, 103)",
            cursor: "pointer"
          }} />
            </FooterSocial>
            <FooterInfo>
                A project by 1KinLabs
            </FooterInfo>
            <FooterInfo>
                All rights reserved
            </FooterInfo>
            <FooterInfo>
                Terms and Conditions
            </FooterInfo>
            <LogoBar>
            <FooterLogoBar>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
                <LogoImg src="img/1k-logo.webp"/>
                <LogoImg src="img/1k-logo-long.webp"/>
            </FooterLogoBar>
            </LogoBar>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: #fad9b7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0px 0px 0px;
`

const FooterText = styled.span`
    font-size: 24px;
    color: #271F18;
    text-align: center;
    margin: 0 0 20px;
    padding: 0 20px 0 20px;
`

const FooterSocial = styled.div`
    display: flex;
`

const FooterInfo = styled.span`
    font-size: 16px;
    color: #271F18;
    padding: 6px 0;
`
const LogoBar = styled.div`
    margin: 20px 0 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    z-index: 99;
    overflow: hidden;
`
const FooterLogoBar = styled.div`
    display: inline;
    white-space: nowrap;
    overflow: hidden;
    @keyframes animate {
        0%{
            transform: translate(-0%,0%);
        }
        100%{
            transform: translate(-25%,0%);
        }
    }
    animation: animate 10s linear  infinite;
    animation-play-state: running;
    animation-delay: 0s;
`

const LogoImg = styled.img`
    height: 48px;
`

export default Footer;
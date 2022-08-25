import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterText>
                "Maybe if we loved ourselves… it wouldn't be so hard to love each other."
                <br />
                Skizzy Mars, “Numb.” Pace. 2014.
            </FooterText>
            <FooterSocial>

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
            </FooterLogoBar>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: #f7dec5b3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
`

const FooterText = styled.span`
    font-size: 24px;
    color: #271F18;
    text-align: center;
    margin: 0 0 24px;
`

const FooterSocial = styled.div`

`

const FooterInfo = styled.span`
    font-size: 16px;
    color: #271F18;
    padding: 6px 0;
`

const FooterLogoBar = styled.div`
    display: inline;
`

const LogoImg = styled.img`
    height: 48px;
`

export default Footer;
import styled from "styled-components";
import { desktop, mobile } from "../utils"

const Team = () => {
    return (
        <Container id="team">
            <Title>
                MEET THE TEAM
            </Title>
            <TeamCard>
                <CardImg src="img/SkizzyMars.webp" />
                <CardName>SKIZZY MARS</CardName>
                <CardType>TASTEMAKER</CardType>
            </TeamCard>
            <Section>
                <Part>
                    <TeamCard>
                        <CardImg src="img/SailorHodl.webp" />
                        <CardName>ZOE WINTERS</CardName>
                        <CardType>TASTEMAKER</CardType>
                    </TeamCard>
                    <TeamCard>
                        <CardImg src="img/dunnzo.webp" />
                        <CardName>DUNNZO</CardName>
                        <CardType>PROJECT LEAD</CardType>
                    </TeamCard>
                </Part>
                <Part>
                    <TeamCard>
                        <CardImg src="img/grep.webp" />
                        <CardName>GREP</CardName>
                        <CardType>TECH DIRECTOR</CardType>
                    </TeamCard>
                    <TeamCard>
                        <CardImg src="img/MPOffshore.webp" />
                        <CardName>MPOFFSHORE</CardName>
                        <CardType>TOKENIZATION</CardType>
                    </TeamCard>
                </Part>

            </Section>
            <Section>
                <Part>
                    <TeamCard>
                        <CardImg src="img/dp.webp" />
                        <CardName>6'3</CardName>
                        <CardType>SOCIAL</CardType>
                    </TeamCard>
                    <TeamCard>
                        <CardImg src="img/Kingdon.webp" />
                        <CardName>KINGDON</CardName>
                        <CardType>OPERATIONS</CardType>
                    </TeamCard>
                </Part>
                <Part>
                    <TeamCard>
                        <CardImg src="img/jahquille.webp" />
                        <CardName>CAPTAIN JAHQUILLE</CardName>
                        <CardType>STRATEGY</CardType>
                    </TeamCard>
                    <TeamCard>
                        <CardImg src="img/T$.webp" />
                        <CardName>T $</CardName>
                        <CardType>GAMING</CardType>
                    </TeamCard>
                </Part>

            </Section>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    text-align: center;
    background: #f7dec5b3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 60px;
    color: #956767;
`

const TeamCard = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardImg = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 10px;
`

const CardName = styled.h4`
    font-size: 24px;
    color: #271F18;
`

const CardType = styled.span`
    font-size: 16px;
    color: #271F18;
`
const Part = styled.div`
    display: flex;
    ${mobile}{flex-direction: column};

`
const Section = styled.div`
    display: flex;
    padding-bottom: 50px;
    ${desktop}{flex-direction: column;}
`
export default Team;
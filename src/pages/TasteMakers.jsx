import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'


import { desktop, mobile } from "../utils";
import TasteMaker from "../components/TasteMaker";

const TasteMakers = () => {
    const [index, setIndex] = useState(0);

    const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const TasteMake = () => {
        switch (index) {
            case 0:
                return (
                    <Content>
                        <Description>
                            <DescriptionTitle>OUR 1ST TASTEMAKERS</DescriptionTitle>
                            <DescriptionText>
                                Kindred Spirits is a collective for artists to collaborate on exclusive web3 projects.
                            </DescriptionText >
                            <DescriptionText>
                                The community select the tastemakers; the tastemakers set the vibe and execute the art.
                            </DescriptionText>
                        </Description>
                        <TasteMaker
                            src="img/skiz.png"
                            name="SKIZZY MARS"
                            type="LEAD TASTEMAKER"
                            onMouseOver={() => setIndex(1)}
                            onMouseLeave={() => setIndex(0)}
                        />
                        <TasteMaker
                            src="img/zoe.png"
                            name="ZOE WINTERS"
                            type="TASTEMAKER"
                            onMouseOver={() => setIndex(2)}
                            onMouseLeave={() => setIndex(0)}
                        />
                    </Content>
                )
            case 1:
                return (

                    <Content
                        onMouseOver={() => setIndex(1)}
                        onMouseLeave={() => setIndex(0)}>
                        <Description>
                            <DescriptionTitle>
                                I’m skizzy mars, a rapper and creative from manhattan.
                            </DescriptionTitle>
                            <DescriptionText>
                                I was signed to Atlantic Records for 7 years and have been navigating the independent landscape the last couple months. I’ve always been vulnerable in my music and as a result this amazing community of supporters has formed around me as I’ve progressed. I’ve been looking for ways to connect with these people on a deeper level - to get to know them. I’ve always found joy in supporting and empowering up and coming creatives, from photographers to artists to graphic designers, using my experience or platform to help others achieve and fulfil their creative potential. I see Kindred Spirits as an opportunity to do this at a far greater level than ever before. A space where artists can form deeper, revolutionary connections with their fans and a community where creators can create safely, collaborate freely, and originate naturally. What excites me most about web3 is the emphasis on community and integrity in the space, and the idea of people coming together to work towards a shared vision. I’m looking forward to the future for all of us on this journey.
                            </DescriptionText >
                        </Description>
                        <TasteMaker
                            src="img/skiz.png"
                            name="SKIZZY MARS"
                            type="LEAD TASTEMAKER"
                        />
                    </Content>
                )
            default:
                return (
                    <AnimatePresence exitBeforeEnter>
                        <Content
                            onMouseOver={() => setIndex(2)}
                            onMouseLeave={() => setIndex(0)}>
                            <Description>
                                <DescriptionTitle>
                                    I’m Zoe Winters, an Animator from Seattle specializing in technological arts and Japanese studies.
                                </DescriptionTitle>
                                <DescriptionText>
                                    Formal art training with a specialization in animation has led to the incredible opportunity to participate in the growth of Web3 by creating NFT’s backed by education and research. As a child, I was obsessed with gaming and anime. As I grew older, I studied Japanese contemporary artists within the superflat movement. Such visuals alongside a tumultuous childhood shaped the dark but adorable characters you see today. My greatest hope is that my personal journey inspires perseverance in the face of adversity, and that my characters bring pure joy to the community as they test the bounds of creativity in the most adorable way. Kindred Spirits is a safe place to test those boundaries together and participate in building a rapidly growing virtual world. I am currently building the characters out as AR and VR sculptures within the metaverse. It is the perfect time to join us as we are just at the beginning.
                                </DescriptionText >
                            </Description>
                            <TasteMaker
                                src="img/zoe.png"
                                name="ZOE WINTERS"
                                type="TASTEMAKER"
                            />
                        </Content>
                    </AnimatePresence>
                )
        }
    }

    return (
        <Container id="taste">
            <Title>
                <STitle><SubTitle>1111</SubTitle>KINDRED SPIRITS</STitle>
                <LTitle>GENESIS PASSES</LTitle>
            </Title>
            <Title>
                <LTitle style={{ color: '#EC5B8F' }}>CREATIVES</LTitle>
                <STitle>COLLABORATING ON NFTs</STitle>
            </Title>
            {TasteMake()}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fdf2df;
`

const Title = styled.div`
    position: absolute;
    padding: 24px 0 12px;
    color: #956767;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 900;
`

const STitle = styled.h2`
    font-size: 44.8px;
    margin: 0;
    display: flex;
`

const SubTitle = styled.section`
    color: #EC5B8F;
`

const LTitle = styled.h1`
    font-size: 72px;
    padding: 0;
    margin: 0;
`

const Content = styled.div`
    padding-top: 160px;
    width: 60%;
    display: flex;
    ${desktop} {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    margin: 16px 40px;
`

const Description = styled.div`
    background: #f7dec5b3;
    padding: 24px 32px;
    border-radius: 3rem;
    color: #956767;
    line-height: 2rem;
`

const DescriptionTitle = styled.h3`
    font-size: 24px;
    margin: 0 0 8px;
`

const DescriptionText = styled.p`
    font-size: 18px;
    margin: 0 0 8px;
`

export default TasteMakers;
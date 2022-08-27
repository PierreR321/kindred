import styled from "styled-components";
import AQ from "../components/AQ";

const AQList = [
    {
        q: "What is a Kindred Spirit?",
        a: "Kindred Spirit kindrid spirit noun plural noun: kindred spirits a person whose interests or attitudes are similar to one's own. I longed to find a kindred spirit"
    },
    {
        q: "What is a Tastemaker?",
        a: "A tastemaker is a visionary. A trendsetter. Someone who inspires others to create. Kindred Spirits tastemaker Skizzy Mars defines this as: an artistic partner who decides and influences the vibe of a project."
    },
    {
        q: "VIP Spirits List?",
        a: "Guarantees 1 mint during pre-sale"
    },
    {
        q: "Spirits List?",
        a: "Priority mint after the VIP Spirits List. If you are unable to mint the Genesis Pass then you are automatically guaranteed to get a Gen1 mint."
    },
    {
        q: "Wen Mint?",
        a: "VIP PreSale: April 29th 10am-4pm ET\n        SL PreSale: April 29th 4pm-10pm ET\n        Public Sale: April 29th 10pm ET\n"
    },
    {
        q: "Mint Price?",
        a: "Pre-Sale 0.05 Ξ\n        Public Mint 0.10 Ξ\n"
    },
    {
        q: "Supply?",
        a: "The Genesis Collection is 1,111 animated spirits vibing to Skizzy Mars"
    },
    {
        q: "Mint per Wallet?",
        a: "1 Mint Per Wallet"
    },
    {
        q: "Wen Reveal?",
        a: "5/3"
    }
]

const FAQ = () => {
    return (
        <Container>
            <h1 style={{ fontSize: "60px", color: "#956767" }}>
                FAQ
            </h1>
            {
                AQList.map((item) => <AQ question={item.q} answer={item.a} />)
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fad9b7;
    padding: 40px;
`

export default FAQ;
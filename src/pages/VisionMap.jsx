import styled from "styled-components";
import { mobile, desktop } from "../utils";

const VisionMap = () => {
    return (
        <Container>
            <MapBar>
                <Bar>
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                </Bar>
            </MapBar>
            <Maps>
                <MapPosts>
                    <MapPost>
                        <MapTitle style={{ background: "#ec5b8f" }}>
                            FIRST DROP
                        </MapTitle>
                        <MapDescription>GEN 0: GENSIS COLLECTION</MapDescription>
                        <MapImg src="img/gen0.webp"></MapImg>
                        <MapText>GENSIS PASS</MapText>
                    </MapPost>
                    <MapPost>
                        <MapTitle style={{ background: "#afcf4b" }}>
                            GENERATIVE ONE
                        </MapTitle>
                        <MapDescription>GEN 1: SKIZZY MARS X ZOE WINTERS</MapDescription>
                        <MapImg src="img/unknown.webp"></MapImg>
                    </MapPost>
                    <MapPost>
                        <MapTitle style={{ background: "#f4c25f" }}>
                            NEXT DROP
                        </MapTitle>
                        <MapDescription>GEN 2: NEW TASTEMAKERS</MapDescription>
                        <MapImg src="img/unknown.webp"></MapImg>
                    </MapPost>
                </MapPosts>
            </Maps>
            <MapBar>
                <Bar1>
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarTitle>KINDRED SPIRITS VISION MAP</MapBarTitle>
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                    <MapBarImg src="img/drop.webp" />
                </Bar1>

            </MapBar>

            <Posts>
                <PostsTitle>GENSIS PASS UTILITY</PostsTitle>
                <Part>
                    <Post>
                        <PostTitle>COMMUNITY</PostTitle>
                        <PostText>Access to a dedicated Discord community of top-tier artists and private community activations</PostText>
                    </Post>
                    <Post>
                        <PostTitle>VOTING</PostTitle>
                        <PostText>Genesis Pass holders will drive future generations of Kindred Spirits collections</PostText>
                    </Post>
                </Part>
                <Part>
                    <Post>
                        <PostTitle>TASTEMAKERS</PostTitle>
                        <PostText>Stealth benefits curated by Genesis Tastemakers</PostText>
                    </Post>
                    <Post>
                        <PostTitle>FUTURE DROPS</PostTitle>
                        <PostText>Discount on Gen1 Mint. Guaranteed priority access to all future drops, merch, irl events and more</PostText>
                    </Post>
                </Part>
            </Posts>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

`

const Maps = styled.div`
    height: auto;
    background: #fad9b7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const MapBar = styled.div`
    background: #fad9b7;
    height: 36px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    z-index: 99;
    overflow: hidden;
`
const Bar1 = styled.div`
white-space: nowrap;
display: flex;
flex-direction: row;
align-items: center;
@keyframes animate1 {
    0%{
        transform: translate(-25%,0%);
    }
    100%{
        transform: translate(0%,0%);
    }
}
animation: animate1 5s linear 0s infinite running;
animation-play-state: running;
animation-delay: 0s;
`

const Bar = styled.div`
    white-space: nowrap;
    display: inline-block;
    flex-direction: row;
    align-items: center;
    @keyframes animate {
        0%{
            transform: translate(-0%,0%);
        }
        100%{
            transform: translate(-25%,0%);
        }
    }
    animation: animate 5s linear  infinite;
    animation-play-state: running;
    animation-delay: 0s;  
`
const MapBarTitle = styled.span`
    color: #956767;
    font-size: 30px;
    padding: 0 20px;
`

const MapBarImg = styled.img`
    width: 12px;
    height: 20px;
    padding: 0 20px;

`

const MapPosts = styled.div`
    display: flex;
    ${mobile} {
        flex-direction: column;
        align-items: center;
    }
`

const MapPost = styled.div`
    
    display: flex;
    margin: 20px;
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
`

const MapTitle = styled.div`
    padding: 8px 24px;
    color: white;
    font-size: 30px;
    border-radius: 5px;
    ${desktop} {
        padding: 4px 12px;
        font-size: 15px;
    }
`

const MapDescription = styled.span`
    color: #956767;
    font-size: 16px;
    padding: 16px 0 24px;
    ${desktop}{
        padding: 8px 0 12px;
        font-size: 8px;
    }
`

const MapImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 20px;
    ${desktop} {
        width: 90px;
        height: 90px;
    }
`

const MapText = styled.span`
    color: #956767;
    font-size: 14px;
    padding: 8px 0 0;
`

const Posts = styled.div`
    text-align: center;
    background-color: #fdf2df;
`

const PostsTitle = styled.h1`
    margin: 0;
    padding: 80px 0 20px 0;
    color: #956767;
    font-size: 60px;
`
const Part = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${mobile}{
        flex-direction: column;
    }
`
const Post = styled.div`
    margin: 0 35px 35px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostTitle = styled.h2`
    font-size: 48px;
    color: #dfcb94;
`

const PostText = styled.p`
    width: 350px;
    font-size: 20px;
`

export default VisionMap;
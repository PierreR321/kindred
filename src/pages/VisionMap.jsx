import styled from "styled-components";

const VisionMap = () => {
    return (
        <Container>
            <Maps>
                <MapBar>
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
                </MapBar>
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
                <MapBar>
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
                </MapBar>
            </Maps>
            <Posts>
                <PostsTitle>GENSIS PASS UTILITY</PostsTitle>
                <Post>
                    <PostTitle>COMMUNITY</PostTitle>
                    <PostText>Access to a dedicated Discord community of top-tier artists and private community activations</PostText>
                </Post>
                <Post>
                    <PostTitle>VOTING</PostTitle>
                    <PostText>Genesis Pass holders will drive future generations of Kindred Spirits collections</PostText>
                </Post>
                <Post>
                    <PostTitle>TASTEMAKERS</PostTitle>
                    <PostText>Stealth benefits curated by Genesis Tastemakers</PostText>
                </Post>
                <Post>
                    <PostTitle>FUTURE DROPS</PostTitle>
                    <PostText>Discount on Gen1 Mint. Guaranteed priority access to all future drops, merch, irl events and more</PostText>
                </Post>
            </Posts>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

`

const Maps = styled.div`
    height: 524px;
    background: #f7dec5b3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const MapBar = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MapBarTitle = styled.span`
    font-size: 30px;
`

const MapBarImg = styled.img`
    width: 12px;
    height: 20px;
`

const MapPosts = styled.div`
    display: flex;
`

const MapPost = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 8px;
`

const MapTitle = styled.div`
    padding: 8px 24px;
    color: white;
    font-size: 30px;
    border-radius: 5px;
`

const MapDescription = styled.span`
    font-size: 16px;
    padding: 16px 0 24px;
`

const MapImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 20px;
`

const MapText = styled.span`
    font-size: 14px;
    padding: 8px 0 0;
`

const Posts = styled.div`
    text-align: center;
`

const PostsTitle = styled.h1`
    color: #956767;
    font-size: 60px;
`

const Post = styled.div`
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
    font-size: 24px;
`

export default VisionMap;
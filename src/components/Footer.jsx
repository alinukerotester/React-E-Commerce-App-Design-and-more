import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons"
import { styled } from "styled-components"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
const Logo = styled.div``
const Desc = styled.p``
const SocialContainer = styled.div``
const SocialIcon = styled.div``

const Center = styled.div`
flex: 1;
`
const Right = styled.div`
flex: 1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ALINUKES</Logo>
                <Desc>There are many variations of Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim excepturi quo totam impedit animi hic,
                    maxime quam rerum velit architecto ut voluptatum eaque possimus officiis labore error?
                    Reiciendis, vel debitis?
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, textColor } from '../styles/colors'
import restaurant from '../assets/restaurant_css.png'
import webshop1 from '../assets/webshop.png'
import webshop2 from '../assets/socks_webshop.png'
import internship from '../assets/internship.png'
import datingApp from '../assets/datingApp.png'
import figma2 from '../assets/figma2.png'

const MyProjects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectHeading>What I've been up to</ProjectHeading>
            <Row>
                <Column>
                    <ImageContainer>
                        <ProjectImage src={internship} alt="Project 1" />
                        <ImageContent>
                            <ImageText>
                                I had my first internship at Bildhistoria, a
                                project that is soon to be launched and will be
                                the largest platform in the Nordics for
                                privately owned historical photographs. Here, I
                                worked with React using TypeScript and learned
                                to work with both Docker and MeiliSearch. Since
                                the website was nearing its launch, much of the
                                work involved fixing non-functional code and
                                fine-tuning the CSS.{' '}
                            </ImageText>
                        </ImageContent>
                    </ImageContainer>
                </Column>
                <Column>
                    <ImageContainer>
                        <ProjectImage src={webshop2} alt="Project 2" />
                        <ImageContent>
                            <ImageText>
                                An online sock store I developed using React.
                                This project reflects my ongoing journey in coding and
                                design, aiming for simplicity and a pleasant
                                user experience.{' '}
                                <a
                                    href="https://vintage-shop.netlify.app"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'

                                    }}
                                >
                                    Visit site
                                </a>{' '}
                            </ImageText>
                        </ImageContent>
                    </ImageContainer>
                </Column>
                <Column>
                    <ImageContainer>
                        <ProjectImage src={datingApp} alt="Project 3" />
                        <ImageContent>
                            <ImageText>
                                When creating our first fullstack application,
                                we used React and Express to build an online
                                dating site exclusively for developers. This
                                allowed me to understand how frontend and
                                backend connects. I enjoyed trying full-stack
                                development, and it is something I would like to
                                experience more of in the future.{' '}
                            </ImageText>
                        </ImageContent>
                    </ImageContainer>
                </Column>
            </Row>
            <Row>
                <Column>
                    <ImageContainer>
                        <ProjectImage src={webshop1} alt="Project 4" />
                        <ImageContent>
                            <ImageText>
                                My first interaction with vanilla JavaScript.
                                Here, we built an online shop for
                                environmentally conscious customers. During the
                                project, I learned the basics of JavaScript and
                                the usage of git. It was a challenging project
                                at the time, but nonetheless fun and exciting.{' '}
                            </ImageText>
                        </ImageContent>
                    </ImageContainer>
                </Column>
                <Column>
                    <ImageContainer>
                        <ProjectImage src={figma2} alt="Project 5" />
                        <ImageContent>
                            <ImageText>
                                In the course UX and UI design I learned about
                                usability, color theory, and, among other
                                things, Figma as a tool. I really enjoy using
                                Figma for visualizing my project before I start
                                coding. It lets the imagination flow and I find
                                it to be a lot more time efficient.{' '}
                            </ImageText>
                        </ImageContent>
                    </ImageContainer>
                </Column>
                <Column>
                    <ImageContainer>
                        <ProjectImage src={restaurant} alt="Project 6" />
                        <ImageContent>
                            <ImageText>
                                My first school development project was to
                                create a one-page website for a restaurant using
                                only HTML and CSS. I thought the opportunities
                                were enormous, but little did I know how big
                                they would become once I had also learned
                                JavaScript.{' '}
                            </ImageText>
                        </ImageContent>
                    </ImageContainer>
                </Column>
            </Row>
        </ProjectsContainer>
    )
}

export default MyProjects

const ProjectsContainer = styled.div`
    background-color: ${secondaryColor};
    padding: 60px 60px 60px 60px;

    @media (max-width: 821px) {
        padding: 5px 0px 5px 0px;
    }
`

const ProjectHeading = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    color: ${primaryColor};
    margin-left: 5%;

    @media (max-width: 821px) {
        font-size: 24px;
    }
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;

    @media (max-width: 821px) {
        flex-direction: column;
    }
`

const Column = styled.div`
    flex: 1;
    margin: 10px;
`

const ImageContainer = styled.div`
    width: auto;
    position: relative;
`

const ProjectImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const ImageContent = styled.div`
    width: 100%;
    height: 99%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(153, 195, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    transition: 0.6s;

    &:hover {
        opacity: 1;
    }
`

const ImageText = styled.p`
    background-color: rgba(255, 255, 255, 0.9);
    color: ${textColor};
    padding: 15px;
    border-radius: 10px;
    max-width: 80%;

    @media (max-width: 821px) {
        width: 400px;
        font-size: 16px;
        padding: 5px;
    }
`

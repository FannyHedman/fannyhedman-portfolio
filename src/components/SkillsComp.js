import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, textColor } from '../styles/colors'

const SkillsComp = () => {
    return (
        <ExperienceContainer id="skills">
            {/* <CardContainer>
                <Card> */}
                    <SkillsContainer>
                        <SkillsHeaderDiv>
                            <SkillsHeader>Skills</SkillsHeader>
                        </SkillsHeaderDiv>
                        <SkillsListDiv>
                            <SkillsList>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Vue.js</li>
                                <li>Bootstrap</li>
                            </SkillsList>
                            <SkillsList>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>Express</li>
                                <li>Git</li>
                                <li>MeiliSearch</li>
                                <li>Docker</li>
                            </SkillsList>
                        </SkillsListDiv>
                    </SkillsContainer>
                {/* </Card>
            </CardContainer> */}
            {/* <CardContainerTwo>
                <CardTwo> */}
                    <SkillsContainer2>
                        <SkillsHeaderDiv>
                            <SkillsHeader>Experience</SkillsHeader>
                        </SkillsHeaderDiv>
                        <SkillsListDiv>
                            <SkillsList>
                                <li>2023</li>
                                <li>2022 - 2024</li>
                                <li>2022 - 2023</li>
                                <li>2014 - 2022</li>
                                <li>2013 - 2014</li>
                                <li>2012 - 2014</li>
                            </SkillsList>
                            <SkillsList>
                                <li>Frontend developer at Bildhistoria</li>
                                <li>ITHS Frontend developer program</li>
                                <li>Sales consultant at Adidas</li>
                                <li>Store staff / purchasing manager at ICA</li>
                                <li>Wait staff at Restaurang AG</li>
                                <li>Wait staff at Piren</li>
                            </SkillsList>
                        </SkillsListDiv>
                    </SkillsContainer2>
                {/* </CardTwo>
            </CardContainerTwo> */}
        </ExperienceContainer>
    )
}

export default SkillsComp

const ExperienceContainer = styled.div`
    display: flex;
    padding: 5%;
    flex-direction: row;
    margin-left: 10%;
    margin-right: 5%;

    @media (max-width: 767px) {
        flex-direction: column;
        margin: 0;
    }

    @media (max-width: 1436px) {
        flex-direction: column;
        margin: 0;
    }

    /* @media (max-width: 1250px) {
        margin: 0;
    } */
`

const CardContainer = styled.div`
    width: 793px;
    max-width: 100%;
    margin: 2rem 20px 5px 5px;
    height: 400px;

    @media (max-width: 767px) {
        margin: 2rem;
        height: 300px;
    }
`

const Card = styled.div`
    position: relative;
    width: 400px;
    background: ${secondaryColor};
    /* box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3); */
    /* box-shadow: 10px 10px 0px #b0d0ff, 20px 20px 0px #c0daff,
        30px 30px 0px #d0e4ff, 40px 40px 0px #e1edff, 50px 50px 0px #e8f1ff; */
        box-shadow: 10px -10px 0px #b0d0ff, 20px -20px 0px #c0daff,
        30px -30px 0px #d0e4ff, 40px -40px 0px #e1edff, 50px -50px 0px #e8f1ff;
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 767px) {
        width: 300px;
    }
`

const CardContainerTwo = styled.div`
    width: 793px;
    max-width: 100%;
    margin: 2rem auto;
    height: 400px;

    @media (max-width: 767px) {
        display: none;
    }
`

const CardTwo = styled.div`
    position: relative;
    width: 600px;
    background: ${secondaryColor};
    /* box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3); */
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
    margin-right: 5%;
    /* box-shadow: 10px -10px 0px #b0d0ff, 20px -20px 0px #c0daff,
        30px -30px 0px #d0e4ff, 40px -40px 0px #e1edff, 50px -50px 0px #e8f1ff; */
            box-shadow: 10px 10px 0px #b0d0ff, 20px 20px 0px #c0daff,
        30px 30px 0px #d0e4ff, 40px 40px 0px #e1edff, 50px 50px 0px #e8f1ff, 60px 60px 0px #fdfae5;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 767px) {
        width: 350px;
    }
`

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    height: auto;
    margin: 0 auto;
`

const SkillsContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    height: auto;
    margin: 0 auto;

    @media (max-width: 767px) {
        display: none;
    }
`

const SkillsHeaderDiv = styled.div`
    margin-left: 15%;
    margin-top: 5%;
`

const SkillsHeader = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    letter-spacing: 2px;
    color: ${textColor};

    @media (max-width: 991px) {
        font-size: 24px;
    }

    @media (max-width: 767px) {
        font-size: 20px;
    }
`

const SkillsListDiv = styled.div`
    display: flex;
    margin-bottom: 5%;
`

const SkillsList = styled.ul`
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: medium;
    color: ${textColor};
    list-style-type: none;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`

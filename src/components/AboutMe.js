import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, textColor } from '../styles/colors'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'
import ProfileCard from './ProfileCard'

const AboutMe = () => {
    const { language } = useLanguage()
    const lang = language === 'se' ? se : en

    return (
        <FlexContainer id="about">
            <LeftDiv>
                <ProfileCardDiv>
                    <ProfileCard />
                </ProfileCardDiv>
            </LeftDiv>
            <RightDiv>
                <AboutMeDiv>
                    <AboutMeTitle>{lang.about_title}</AboutMeTitle>
                    <AboutMeText>
                        I am attending ITHS Frontend development program, and I
                        will graduate in June 2024. My interest in development
                        sparked during my parental leave when I took a distance
                        course in frontend development. I love being creative,
                        and it's something I strive for in my professional life
                        – and ta-da! That's when I discovered development. I
                        also appreciate the problem-solving aspect of coding; it
                        can be challenging but also oh so rewarding. I have an
                        interest in design and usability as well, and love to
                        add a bit of color to things. When I'm not generating
                        code, I'm being creative in other areas. I might be
                        painting, refurbishing furniture, and I'm always on the
                        lookout for a recycled find. Otherwise, I mostly spend
                        my time with family and friends.
                    </AboutMeText>
                </AboutMeDiv>
            </RightDiv>
        </FlexContainer>
    )
}

export default AboutMe

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    height: auto;
    background-color: ${primaryColor};

    /* Desktop */
    @media (min-width: 992px) {
        flex-direction: row;
        align-items: flex-start;
        width: 90%;
        margin-left: 5%;
    }
`

const LeftDiv = styled.div`
    flex: 1;
    max-width: 400px;
    margin-left: 10%;

/* Ipad */
    @media (max-width: 991px) {
        flex: auto;
        margin-left: 60%;
        text-align: center;
        max-width: 100%;
    }
/* Mobile */
    @media (max-width: 767px) {
        flex: auto;
        margin-left: 10%;
        margin-bottom: 0;
        text-align: center;
        max-width: 100%;
    }
`

const ProfileCardDiv = styled.div`
    padding: 20px;
`

const AboutMeDiv = styled.div`
    padding: 20px;
`

const AboutMeTitle = styled.h2`
    color: ${textColor};
    text-align: start;
`

const AboutMeText = styled.p`
    color: ${textColor};
    text-align: start;
    margin-top: 20px;
`

const RightDiv = styled.div`
    flex: 1;
    max-width: 450px;
    margin-right: 10%;

    /* Ipad */
    @media (max-width: 991px) {
        flex: auto;
        margin-right: 0;
        margin-top: 0;
        text-align: center;
        max-width: 500px;
    }

    @media (max-width: 767px) {
        flex: auto;
        text-align: center;
        max-width: 100%;
    }
`

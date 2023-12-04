import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, textColor } from '../styles/colors'

const HeroSection = () => {

    const [shouldAnimate, setShouldAnimate] = useState(false)

    useEffect(() => {
        setShouldAnimate(true)
    }, [])

    return (
        <Container id="home">
            <HeadingDiv>
                <TestDiv
                    className={shouldAnimate ? 'drop-down-word' : ''}
                ></TestDiv>
                <Title>Frontend Developer</Title>
            </HeadingDiv>
            <PresentationDiv>
                <Presentation>
                    Hello! I'm Fanny, a Stockholm based frontend developer. I'm
                    passionate about coding and creating, eager to gain
                    professional experience and expand my web development
                    skills.{' '}
                </Presentation>
            </PresentationDiv>
        </Container>
    )
}

const fadeInAnimation = `
  animation: fadeIn 1s ease-in;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const dropDownAnimation = `
  &.drop-down-word {
    animation: dropDown 4s linear, fadeOut 0.5s linear 3.5s;
    animation-fill-mode: forwards;
    transform-origin: top;
  }

  @keyframes dropDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh); // Move the word down by the viewport height
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 100px auto 0px auto;
    padding: 20px;
    background-color: ${primaryColor};
`

const HeadingDiv = styled.div``
const TestDiv = styled.p`
    ${dropDownAnimation}
`
const Title = styled.h1`
    font-family: 'DM Serif Display', serif;
    font-size: 72px;
    color: ${textColor};
    ${fadeInAnimation}

    @media (max-width: 991px) {
        font-size: 64px;
        margin-left: 5%;
    }
`

const PresentationDiv = styled.div`
    margin-top: 20px;
    margin-left: 40%;
`

const Presentation = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    color: ${textColor};

    /* Ipad */
    @media (max-width: 991px) {
        font-size: 28px;
    }

        /* Mobile */
        @media (max-width: 767px) {
          font-size: 18px;
          font-weight: bold;
    }
`

export default HeroSection

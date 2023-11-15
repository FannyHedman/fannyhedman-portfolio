import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, textColor } from '../styles/colors'
import profilepic from '../assets/profilepic.jpg'

const ProfileCard = () => {
    return (
        <CardContainer>
            <Card>
                <header>
                    <div className="avatar">
                        <PinkFilteredImage
                            src={profilepic}
                            alt="Fanny Hedman"
                        />
                    </div>
                </header>
                <h3>Fanny Hedman</h3>
                <div className="desc">
                    Feel free to follow me or download my resume
                </div>
                <footer>
                    <p>
                        <a
                            href="https://linkedin.com/in/fanny-hedman-744b44251"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Linkedin
                        </a>
                        <a
                            href="https://github.com/FannyHedman"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1e-nGQDUfM6od8Z3e6dxoltbQbVxexqZa/view?usp=drive_link"
                            download="cv_portfolio.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </p>
                </footer>
            </Card>
            <div className="clear"></div>
        </CardContainer>
    )
}

export default ProfileCard

const PinkFilteredImage = styled.img`
    opacity: 0.7;
`

const CardContainer = styled.div`
    width: 793px;
    max-width: 100%;
    margin: 2rem auto;
`

const Card = styled.div`
    position: relative;
    width: 300px;
    background: #fff;
    box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    header {
        position: relative;
        width: 100%;
        height: 60px;
        background-color: ${textColor};
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: inherit;
            transform: skewY(8deg);
            transform-origin: 0 100%;
        }
        .avatar {
            position: absolute;
            left: 50%;
            top: 30px;
            margin-left: -50px;
            z-index: 5;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            background: #ccc;
            border: 3px solid #fff;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100px;
                height: auto;
            }
        }
    }

    h3 {
        position: relative;
        margin: 90px 0 40px;
        text-align: center;
        color: ${textColor};
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        &::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            margin-left: -15px;
            width: 30px;
            height: 1px;
            background: ${textColor};
        }
    }
    .desc {
        padding: 0 1rem 2rem;
        text-align: center;
        line-height: 1.5;
        color: ${textColor};
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        margin-bottom: 3%;
    }

    footer {
        position: relative;
        height: 45px;
        background-color: ${secondaryColor};
        text-align: center;
        p {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            a {
                padding: 0 1rem;
                text-decoration: none;
                font-family: 'Open Sans', sans-serif;
                font-weight: bold;
                color: ${textColor};
                transition: color 0.4s;
                &:hover {
                    color: ${primaryColor};
                }
            }
        }
        &::before {
            content: '';
            position: absolute;
            top: 0px;
            bottom: 0;
            left: 0;
            right: 0;
            background: inherit;
            transform: skewY(8deg);
            transform-origin: 100%;
        }
    }
`

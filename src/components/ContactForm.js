import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor, textColor } from '../styles/colors'

const ContactForm = () => {
    return (
        <ContactFormContainer id="contact">
            <ContactHeading>Contact me</ContactHeading>
            <ContactText>
                Contact me through this form or at fannyhedmans@gmail.com
            </ContactText>
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div className="input-group">
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </ContactFormContainer>
    )
}

export default ContactForm

const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-bottom: 50px;
    background-color: ${textColor};

    @media (max-width: 767px) {
        padding-top: 5%;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        width: 500px;
    }

    input {
        height: 5vh;
        padding: 0px 0px 0px 5px;
    }

    textarea {
        height: 20vh;
        padding: 5px 0px 0px 5px;
    }

    input,
    textarea {
        width: 100%;
        margin: 5px 0;
        border-radius: 10px;
        border: 1px solid ${textColor};
        box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3);

        @media (max-width: 767px) {
            max-width: 50%;
            margin-left: 25%;
        }
    }

    button {
        width: 100px;
        height: 5vh;
        margin-top: 5px;
        margin-bottom: 30px;
        color: ${textColor};
        background-color: ${primaryColor};
        border-radius: 10px;
        border: 3px solid ${secondaryColor};
        font-weight: bold;
        font-size: 18px;
        box-shadow: 5px 5px 0px #b0d0ff, 10px 10px 0px #c0daff;
        transition: transform 0.2s ease-in-out;
        margin-left: 1%;

        &:hover {
            text-decoration: none;
            transform: scale(1.1);
        }

        @media (max-width: 767px) {
            max-width: 50%;
            margin-left: 25%;
        }
    }
`

const ContactHeading = styled.h3`
    text-align: center;
    margin-bottom: 1%;
    margin-top: 5%;
    font-size: 30px;
    color: ${primaryColor};

    /* ipad */
    @media (max-width: 991px) {
        font-size: 28px;
    }
    /* Mobile */
    @media (max-width: 767px) {
        font-size: 24px;
    }
`

const ContactText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: white;
    text-align: center;
    margin-top: 0;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`
// Test

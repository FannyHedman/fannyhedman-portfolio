import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsComp from '../components/SkillsComp'
import MyProjects from '../components/MyProjects'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <AboutMe />
            <MyProjects />
            <SkillsComp />
            <ContactForm />
        </div>
    )
}

export default HomePage

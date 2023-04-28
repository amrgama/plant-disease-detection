import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../../components/section/Section'
import images from '../../assets/images'
import {FaFacebookF, ImTwitter, RiInstagramFill} from "react-icons/all"
import AboutUS from '../../components/about/AboutUS'
import AboutAppleScabDisease from '../../components/about/AboutAppleScabDisease'

const About = () => {
  return (
    <div className='about'>
        <Section className="py-5" containerClassName="container">
            <div className="row">
                <AboutUS />
                <AboutAppleScabDisease />
                <div className="col-lg-4 d-none d-lg-flex position-fixed top-0 end-0 vh-100 align-items-end justify-content-end"
                style={{"zIndex": "-1"}}>
                    <div className="col-12 col-lg-8 d-flex flex-column align-items-center flex-wrap gap-3 mb-3">
                        <img src={images.main.detection_animation} alt="..." className="w-100" style={{"mixBlendMode": "darken", "maxWidth": "315px"}}/>
                        <Link to="/disease-detection" className="py-3 px-3 nav-link btn btn-primary text-white fs-5 text-capitalize">
                        detect a disease now
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
        {/* <Section className={"py-5"} containerClassName={"container"}>
            <div className="row gap-3">
                <FaFacebookF />
                <ImTwitter />
            </div>
        </Section> */}
    </div>
  )
}

export default About

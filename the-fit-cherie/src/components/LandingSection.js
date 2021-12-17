import React from 'react';
import Styled from 'styled-components';
import LandingPageBanner from '../images/LandingPageBanner.png';
import CurvedLogo from '../images/CurvedLogo.png';



const LandingSection = () => {
    return(
        <Landing>
            <BannerContainer>
                <BannerImage src={LandingPageBanner} alt="thefitcherie"/>
                <DescriptionContainer>
                    <DescriptionBox>
                        <BrandNameContainer>
                            <BrandName>The Fit Cherie</BrandName>
                        </BrandNameContainer>
                        <Headline>Cherie</Headline>
                        <h2>Fitness Instructor | Content Creator <br/> Brand Ambassador</h2>
                        <Description>Cherie helps women intent on finding impactful, exciting, and inclusive workouts in order to increase their self confidence through dynamic group fitness classes and lifestyle tips.</Description>
                        <CurvedLogoImage src={CurvedLogo} alt="thefitcheriecurvedlogo"/>
                    </DescriptionBox>
                </DescriptionContainer>
            </BannerContainer>
        </Landing>
    )
};

const Landing = Styled.div
    `
    min-height: 90vh;
    `

const BannerContainer = Styled.div
    `
    display: flex;
    position: relative;
    `

const BannerImage = Styled.img
    `
    width: 100%;
    height: 100%;
    object-fit: cover;
    `      

const DescriptionContainer = Styled.div
    `
    width: 600px;
    height: 100%;
    padding: 1.5em;
    position: absolute;
    left: 45%;
    background: var(--white);
    `       
    
const DescriptionBox = Styled.div
    `
    height: 25%;
    text-align: center;
    ` 

const BrandNameContainer = Styled.div
    `
    background: var(--black);
    text-align: center;
    padding: 0.5px;
    margin-left: 130px;
    margin-right: 130px;
    margin-top: 100px;
    `     

const BrandName = Styled.h2
    `
    color: var(--white);
    font-weight: 100;
    font-size: 1.25em;
    `    

const Headline = Styled.h1
    `
    font-size: 4em;
    ` 

const Description = Styled.h2
    `
    text-transform: none;
    color: var(--black);
    font-weight: 100;
    letter-spacing: 0.1em;
    `

const CurvedLogoImage = Styled.img
    `
    margin-top: 20px;
    width: 15%;
    `   

export default LandingSection;
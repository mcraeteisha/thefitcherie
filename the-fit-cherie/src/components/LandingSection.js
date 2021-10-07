import React from 'react';
import Styled from 'styled-components';
import LandingPageBanner from '../images/LandingPageBanner.png';


const LandingSection = () => {
    return(
        <Landing>
            <BannerContainer>
                <BannerImage src={LandingPageBanner} alt="thefitcherie"/>
                <DescriptionContainer>
                    <DescriptionBox>
                        <h2>Dance | Barre | Stretching</h2>
                        <Tagline>Feel good fitness, anywhere you go.</Tagline>
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
    width: 500px;
    height: 200px;
    padding: 2.50em;
    position: absolute;
    left: 53%;
    top: 30%;
    background: var(--white);
    `       
    
const DescriptionBox = Styled.div
    `
    width: %;
    height: 25%;
    text-align: center;
    ` 

const Tagline = Styled.h1
    `
    font-size: 2.5em;
    `       


export default LandingSection;
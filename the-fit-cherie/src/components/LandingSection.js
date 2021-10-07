import React from 'react';
import Styled from 'styled-components';
import LandingPageBanner from '../images/LandingPageBanner.png';


const LandingSection = () => {
    return(
        <Landing>
            <BannerContainer>
                <BannerImage src={LandingPageBanner} alt="thefitcherie"/>
            </BannerContainer>
            <div className="descriptionBox">
                <h2>Dance | Barre | Stretching</h2>
                <h1>Feel good fitness, anywhere you go.</h1>
            </div>
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
    `

const BannerImage = Styled.img
    `
    width: 100%;
    height: 100%;
    object-fit: cover;
    `    

export default LandingSection;
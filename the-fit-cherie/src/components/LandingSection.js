import React from 'react';
import Styled from 'styled-components';


const LandingSection = () => {
    return(
        <Landing>
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

export default LandingSection;
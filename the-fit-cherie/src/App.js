import React, { Fragment } from "react";
import LandingPage from "./components/pages/LandingPage";
import GlobalStyle from "./components/GlobalStyle";

// const App = () => <LandingPage />;

function App() {
    return (
        <Fragment>
            <LandingPage />
            <GlobalStyle />
        </Fragment>
    )
}

export default App;
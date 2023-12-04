import React from "react";
import "./Loading.css";
import poulpe from "../images/poulpe.svg"

class loadingScreen extends React.Component {

    render() {
        return (
            <div className="loadingDiv">
                <img className="loadingLogo" src={poulpe} alt="loading..."/>
            </div>
        )
    }
}

export default loadingScreen;
import React from "react";
import "./Homepage.css"
import { withRouter } from "./widgets/withRouter";
import ensibs from "./images/ensibs.png";
import batEnsibs from "./images/BatEnsibs.jpg";
import dseg from "./images/dseg.png";
import batDseg from "./images/BatDseg.jpg";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light",
        };
        this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        else
            storedTheme = "dark";

        this.setState({ theme: storedTheme });
    }

    navigateTo(path) {
        this.props.navigate(path);
    }



    render() {
        return (
            <div id="flexCard" data-theme={this.state.theme}>
                <div className="flexCardWrapper">
                    <div className="flexCardItem" onClick={() => this.navigateTo("/ensibs")}>
                        <div className="card front">
                            <img className="Image" src={ensibs} alt="ensibs"></img>
                        </div>
                        <div className="svgScaleDiv">
                            <svg viewBox="0 0 300 100" width="100%" className="scaling-svg-home">
                                <defs>
                                    <linearGradient id="lgrad" x1="50%" y1="100%" x2="50%" y2="0%" >
                                        <stop offset="0%" stopColor="var(--focusShadowColor)" stopOpacity="1" />
                                        <stop offset="31%" stopColor="var(--focusShadowColor)" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="rgb(238,130,238)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <polygon className="myPolygon" points="150,100 0,0 300,0" style={{ fill: "url(#lgrad)" }} />
                            </svg>
                        </div>
                    <img className="holoImage" src={batEnsibs} alt="batEnsibs"></img>
                    
                    </div>
                </div>
                <div className="flexCardWrapper">
                    <div className="flexCardItem" onClick={() => this.navigateTo("/dseg")}>
                        <div className="card">
                            <img className="Image" src={dseg} alt="ensibs"></img>
                        </div>
                        <div className="svgScaleDiv">
                            <svg viewBox="0 0 300 100" width="100%" className="scaling-svg-home">
                                <defs>
                                    <linearGradient id="rgrad" x1="50%" y1="100%" x2="50%" y2="0%" >
                                        <stop offset="0%" stopColor="var(--focusShadowColor)" stopOpacity="1" />
                                        <stop offset="31%" stopColor="var(--focusShadowColor)" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="rgb(238,130,238)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <polygon className="myPolygon" points="150,100 0,0 300,0" style={{ fill: "url(#rgrad)" }} />
                            </svg>
                        </div>
                        <img className="holoImage" src={batDseg} alt="batDseg"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);
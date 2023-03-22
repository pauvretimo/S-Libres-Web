import React from "react";
import "./Menu.css"
import {withRouter}  from "./widgets/withRouter";

class Return extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    navigateToHome() {
        this.props.navigate("/");
    }

    render() {
        return (
            <div className="menuLDiv">
                <button className="menuOpen" onClick={() => this.navigateToHome()}>
                    <svg viewBox="0 0 50 50" height="30px" width="30px">
                        <line x1="10" y1="25" x2="40" y2="25" strokeWidth="5" stroke="white" strokeLinecap="round"/>
                        <path d="M20 15 L10 25 L20 35" stroke="white" strokeWidth="5" fillOpacity="0" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        )
    }
}

export default withRouter(Return);
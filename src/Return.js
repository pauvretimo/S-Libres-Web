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
                <button className="menuOpen" onClick={() => this.navigateToHome()}>&larr;</button>
            </div>
        )
    }
}

export default withRouter(Return);
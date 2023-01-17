import React from "react";
import "./Homepage.css"
import {withRouter}  from "./widgets/withRouter";
import ensibs from "./images/ensibs.png";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(path) {
        this.props.navigate(path);
    }


    componentDidMount() {


        document.getElementById("cards").onmousemove = e => {
            for(const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        }
    }



    render() {
        return (
            <div>
                <div id="cards">
                    <div onClick={() => this.navigateTo("/ensibs")} className="card">
                        <div className="card-content">
                            <div className="card-image">
                                <img className="Image" src={ensibs}></img>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title">
                                        <h3>ENSIBS Vannes</h3>
                                        <h4></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => this.navigateTo("/dseg")} className="card">
                        <div className="card-content">
                            <div className="card-image">
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title">
                                        <h3>DSEG</h3>
                                        <h4></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*<Link to={"/vannes"}>Vannes</Link>*/}
                {/*<Link to={"/lorient"}>Lorient</Link>*/}
            </div>
        )
    }
}

export default withRouter(Homepage);
import React from "react";
import "./Menu.css"
import PropTypes from 'prop-types';
import DefaultSVG from "./SVG/DefaultSVG";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLegend: false,
            showTimer: false,
            showCredits: false,
            t1: new Date(),
            t2: new Date()
        }
        this.handleIsNow = props.handleIsNow;
        this.handleTheme = props.handleTheme;
        this.handleLeft = props.handleLeft;
        this.handleRight = props.handleRight;
        this.handleT1 = this.handleT1.bind(this)
        this.handleT2 = this.handleT2.bind(this)
    }

    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if (e.code === "ArrowLeft" && !this.state.showTimer && !this.state.showLegend && !this.state.showCredits) {
                this.handleLeft();
            } else if (e.code === "ArrowRight" && !this.state.showTimer && !this.state.showLegend && !this.state.showCredits) {
                this.handleRight();
            }
        })
        const items = document.getElementsByClassName("menuItems")
        for (const i of items) {
            i.style.display = "none";
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.showTimer) {
            this.nameInput.focus();
        }
    }

    display = () => {
        const items = document.getElementsByClassName("menuItems")
        const itemState = items[0].style.display;
        const toState = itemState === "none" ? "block" : "none";
        for (const i of items) {
            i.style.display = toState;
        }
    }

    handleSubmitTime = () => {
        this.setState({showTimer: false})
        this.handleIsNow(false, this.state.t1, this.state.t2)
    }

    handleDisable = () => {
        this.setState({showTimer: false})
        this.handleIsNow(true, new Date(), new Date());
    }

    handleT1(event) {
        this.setState({t1: new Date(new Date(Date.now()).toUTCString().slice(0, 17) + event.target.value + ":00")})
    }
    handleT2(event) {
        this.setState({t2: new Date(new Date(Date.now()).toUTCString().slice(0, 17) + event.target.value + ":00")})
    }

    render() {
        return (
            <div className="menuDiv">
                <button className="menuOpen" onClick={this.display}>☰</button>
                <button className="menuItems" onClick={() => this.setState({showLegend: true, showTimer: false, showCredits: false})}>?</button>
                <button className="menuItems" onClick={() => this.setState({showTimer: true, showLegend: false, showCredits: false})}>&#128344;</button>
                <button className="menuItems" onClick={() => this.setState({showCredits: true, showTimer: false, showLegend: false})}>&#169;</button>
                <button className="menuItems" onClick={this.handleTheme}>&#127763;</button>
                <div className={this.state.showTimer ? "popUpMenu" : "hidden"}>
                    <button className="popUpCloseButton" onClick={() => {
                        this.setState({showTimer: false})
                    }}>x
                    </button>
                    <p className="timeText">Sélectionner le créneau horaire</p>
                    <div className="timeSelector">
                        <input type="time" className="timeInput" maxLength="2" onChange={this.handleT1} ref={(input) => { this.nameInput = input;}}/>
                        <input type="time" className="timeInput" maxLength="2" onChange={this.handleT2}/>
                        <button className="submitButton" onClick={this.handleDisable}>disable</button>
                        <button className="submitButton" onClick={this.handleSubmitTime}>Submit</button>
                    </div>
                </div>
                <div className={this.state.showCredits ? "popUpMenu" : "hidden"}>
                    <button className="popUpCloseButton" onClick={() => {
                        this.setState({showCredits: false})
                    }}>x
                    </button>
                    <div>
                        <p>&#169; tout droits réservés à Maxence JUNG et Timoté MOREAUX</p>
                    </div>
                </div>
                <div className={this.state.showLegend ? "popUpMenu" : "hidden"}>
                    <button className="popUpCloseButton" onClick={() => {
                        this.setState({showLegend: false})
                    }}>x
                    </button>
                    <div className="legendDiv">
                        <p className="textGreen textLegend">Salles libres</p>
                        <p className="textOrange textLegend">Salles bientôt occupées</p>
                        <p className="textRed textLegend">Salles occupées</p>
                        <p className="textGrey textLegend">Salles non disponibles</p>
                        <p className="textLightBlue textLegend">Couloirs et escaliers</p>
                        <p className="textBlue textLegend">Toilettes</p>
                    </div>
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    handleIsNow: PropTypes.func,
    handleTheme: PropTypes.func,
    handleLeft: PropTypes.func,
    handleRight: PropTypes.func,
}

Menu.defaultProps = {
    handleIsNow: () => {},
    handleTheme: () => {},
    handleLeft: () => {},
    handleRight: () => {},
}

export default Menu;
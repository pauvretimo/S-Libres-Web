import React from "react";
import "./Menu.css"
import PropTypes from 'prop-types';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLegend: false,
            showTimer: false,
            showRoomName: false,
            menuOpened: false,
            weekday: new Date().getDay() - 1 % 7,
            today: new Date().getDay() - 1 % 7,
            t1: new Date(),
            t2: new Date()
        }
        this.handleIsNow = props.handleIsNow;
        this.handleTheme = props.handleTheme;
        this.handleLeft = props.handleLeft;
        this.handleRight = props.handleRight;
        this.handleRoomName = props.handleRoomName;
        this.handleT1 = this.handleT1.bind(this)
        this.handleT2 = this.handleT2.bind(this)
        this.handleWeekday = this.handleWeekday.bind(this)
        this.createWeekdayButtons = this.createWeekdayButtons.bind(this)
    }

    handleKeys = (e) => {
        if (e.code === "ArrowLeft" && !this.state.showTimer && !this.state.showLegend && !this.state.showRoomName) {
            this.handleLeft();
        } else if (e.code === "ArrowRight" && !this.state.showTimer && !this.state.showLegend && !this.state.showRoomName) {
            this.handleRight();
        }
    }


    componentDidMount() {
        window.addEventListener("keydown", this.handleKeys)
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

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeys)
    }

    display = () => {
        this.setState({menuOpened: !this.state.menuOpened})
    }

    handleSubmitTime = () => {
        this.setState({showTimer: false})
        this.handleIsNow(false, this.state.t1, this.state.t2)
    }

    handleDisable = () => {
        this.setState({showTimer: false})
        this.handleIsNow(true, new Date(), new Date());
    }

    createWeekdayButtons = () => {
        let today = new Date().getDay() - 1 % 7;
        let weekday = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
        let buttonText = [];
        let buttonValue = [];
        if (today < 3) {
            buttonText = ["Aujourd'hui", "Demain", weekday[today+2]]
            buttonValue = [today, today+1, today+2]
        } else if (today === 3) {
            buttonText = ["Aujourd'hui", "Demain", "Lundi"]
            buttonValue = [today, today+1, today+4]
        } else if (today === 4) {
            buttonText = ["Aujourd'hui", "Lundi", "Mardi"]
            buttonValue = [today, today+3, today+4]
        } else {
            buttonText = ["Lundi", "Mardi", "Mercredi"]
            if (today === 5) {
                buttonValue = [today+2, today+3, today+4]
            } else {
                buttonValue = [today+1, today+2, today+3]
            }
        }
        return (
                [0, 1, 2].map((i) => {
                    return (
                        <button className={this.state.weekday === buttonValue[i] ? "selectedDay weekdayButton" : "weekdayButton"} value={buttonValue[i]} onClick={this.handleWeekday}>{buttonText[i]}</button>
                    )
                })
        );
    }

    handleWeekday(event) {
        this.setState({weekday: parseInt(event.target.value),
            t1: new Date(new Date(Date.now()+ 86400000*(event.target.value - this.state.today)).toUTCString().slice(0, 17) + this.state.t1.getHours().toString() + ":" + this.state.t1.getMinutes().toString() + ":00"),
            t2: new Date(new Date(Date.now()+ 86400000*(event.target.value - this.state.today)).toUTCString().slice(0, 17) + this.state.t2.getHours().toString() + ":" + this.state.t2.getMinutes().toString() + ":00")
        })  
    }

    handleT1(event) {
        this.setState({t1: new Date(new Date(Date.now()+ 86400000*(this.state.weekday - this.state.today)).toUTCString().slice(0, 17) + event.target.value + ":00")})
    }
    handleT2(event) {
        this.setState({t2: new Date(new Date(Date.now()+ 86400000*(this.state.weekday - this.state.today)).toUTCString().slice(0, 17) + event.target.value + ":00")})
    }

    render() {
        return (    
            <div className="menuRDiv">
                <div className="menuOpen" onClick={this.display}>
                    <svg viewBox="0 0 50 50" height="30px" width="30px" strokeLinecap="round">
                        <path className={this.state.menuOpened ? "lineMenu opened" : "lineMenu"} d="M10 13 L40 13 L10 37" fill="transparent" stroke="white" strokeWidth="5"/>
                        <line className={this.state.menuOpened ? "lineMenu opened" : "lineMenu"} x1="10" y1="25" x2="40" y2="25" stroke="white" strokeWidth="5"/>
                        <path className={this.state.menuOpened ? "lineMenu opened" : "lineMenu"} d="M10 37 L40 37 L10 13" fill="transparent" stroke="white" strokeWidth="5"/>
                    </svg>
                <button className="menuItems" style={{display: this.state.menuOpened ? "block" : "none"}} onClick={() => this.setState({showLegend: true, showTimer: false})}>?</button>
                <button className="menuItems" style={{display: this.state.menuOpened ? "block" : "none"}} onClick={() => this.setState({showTimer: true, showLegend: false})}>&#128344;</button>
                <button className="menuItems" style={{display: this.state.menuOpened ? "block" : "none"}} onClick={this.handleRoomName}>&#169;</button>
                <button className="menuItems" style={{display: this.state.menuOpened ? "block" : "none"}} onClick={this.handleTheme}>&#127763;</button>
                </div>
                <div className={this.state.showTimer ? "popUpMenu" : "hidden"}>
                    <button className="popUpCloseButton" onClick={() => {
                        this.setState({showTimer: false})
                    }}>x
                    </button>
                        <p className="timeText">Sélectionner le jour:</p>
                        <div className="weekdayDiv">
                            {this.createWeekdayButtons()}
                        </div>
                        <p className="timeText">Sélectionner le créneau horaire</p>
                    <div className="timeSelector">
                        <input type="time" className="timeInput" maxLength="2" onChange={this.handleT1} ref={(input) => { this.nameInput = input;}}/>
                        <input type="time" className="timeInput" maxLength="2" onChange={this.handleT2}/>
                        <button className="submitButton" onClick={this.handleDisable}>disable</button>
                        <button className="submitButton" onClick={this.handleSubmitTime}>Submit</button>
                    </div>
                </div>
                <div className={this.state.showLegend ? "popUpMenu" : "hidden"}>
                    <button className="popUpCloseButton" onClick={() => {
                        this.setState({showLegend: false})
                    }}>x
                    </button>
                    <div className="legendDiv">
                        <div className="legendSubDiv">
                            <div className="colorBox greenBox"></div>
                            <p className="textLegend">Salles libres</p>
                        </div>
                        <div className="legendSubDiv">
                            <div className="colorBox orangeBox"></div>
                        <p className="textLegend">Salles bientôt occupées</p>
                        </div>
                        <div className="legendSubDiv">
                            <div className="colorBox redBox"></div>
                        <p className="textLegend">Salles occupées</p>
                        </div>
                        <div className="legendSubDiv">
                            <div className="colorBox greyBox"></div>
                        <p className="textLegend">Salles non disponibles</p>
                        </div>
                        <div className="legendSubDiv">
                            <div className="colorBox lightBlueBox"></div>
                        <p className="textLegend">Couloirs, escaliers et ascenseurs</p>
                        </div>
                        <div className="legendSubDiv">
                            <div className="colorBox blueBox"></div>
                        <p className="textLegend">Toilettes</p>
                        <br/>
                        </div>
                        <div className="legendSubDiv">
                            <p style={{margin: "5px"}}>&#169; tous droits réservés à Maxence JUNG et Timoté MOREAUX</p>
                        </div>
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
    handleRoomName: PropTypes.func,
}

Menu.defaultProps = {
    handleIsNow: () => {},
    handleTheme: () => {},
    handleLeft: () => {},
    handleRight: () => {},
    handleRoomName: () => {},
}

export default Menu;
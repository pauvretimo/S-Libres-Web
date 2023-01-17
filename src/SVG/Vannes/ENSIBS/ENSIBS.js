import Batiment from "../../../Batiment";
import ENSIBS_RDC from "./ENSIBS_RDC";
import ENSIBS_E1 from "./ENSIBS_E1";
import "../../../Menu";
import Menu from "../../../Menu";
import Return from "../../../Return";

class ENSIBS extends Batiment {
    constructor(props) {
        super(props);
        this.floorNumber = 2;
        this.url = "https://api.cyberlog.dev/get-calendar/vannes/ensibs"
    }

    async componentDidMount() {
        super.componentDidMount();
    }

    render() {
        return (
            this.state.isLoading
            ? <div>load</div> : <div style={{background: "var(--background)", width: "100vw", height: "100vh"}} data-theme={this.state.theme} className="mainDiv">
                <Menu handleIsNow={this.handleIsNow} handleTheme={this.handleTheme} handleLeft={this.goDown} handleRight={this.goUp}></Menu>
                <Return/>
                    <p className={this.state.floor === 0 ? "hidden" : "navArrowLeft navArrow"} onClick={this.goDown}>&#x3c;</p>
                    <p className={this.state.floor === this.floorNumber-1 ? "hidden" : "navArrowRight navArrow"} onClick={this.goUp}>&#x3e;</p>
                    {this.state.floor === 0 && <ENSIBS_RDC key={"0" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end}/>}
                    {this.state.floor === 1 && <ENSIBS_E1 key={"1" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end}/>}
                </div>
        )
    }
}

export default ENSIBS
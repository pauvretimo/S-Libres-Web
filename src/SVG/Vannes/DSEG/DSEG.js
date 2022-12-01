import Batiment from "../../../Batiment";
import DSEG_RDC from "./DSEG_RDC";
import DSEG_E1 from "./DSEG_E1";
import DSEG_E2 from "./DSEG_E2";
import DSEG_E3 from "./DSEG_E3";
import "../../../Menu";
import Menu from "../../../Menu";

class DSEG extends Batiment {
    constructor(props) {
        super(props);
        this.floorNumber = 4;
    }

    async componentDidMount() {
        super.componentDidMount();
    }

    render() {
        return (
            this.state.isLoading
                ? <div>load</div> : <div style={{background: "var(--background)"}} data-theme={this.state.theme} className="mainDiv">
                    <Menu handleIsNow={this.handleIsNow} handleTheme={this.handleTheme} handleLeft={this.goDown} handleRight={this.goUp}></Menu>
                    <p className={this.state.floor === 0 ? "hidden" : "navArrowLeft navArrow"} onClick={this.goDown}>&#x3c;</p>
                    <p className={this.state.floor === this.floorNumber-1 ? "hidden" : "navArrowRight navArrow"} onClick={this.goUp}>&#x3e;</p>
                    {this.state.floor === 0 && <DSEG_RDC key={"0" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end}/>}
                    {this.state.floor === 1 && <DSEG_E1 key={"1" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end}/>}
                    {this.state.floor === 2 && <DSEG_E2 key={"2" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end}/>}
                    {this.state.floor === 3 && <DSEG_E3 key={"3" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end}/>}
                </div>
        )
    }
}

export default DSEG
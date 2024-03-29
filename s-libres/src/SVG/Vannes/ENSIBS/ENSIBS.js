import Batiment from "../../../Batiment";
import ENSIBS_RDC from "./ENSIBS_RDC";
import ENSIBS_E1 from "./ENSIBS_E1";
import "../../../Menu";
import Menu from "../../../Menu";
import Return from "../../../Return";
import Loading from "../../../widgets/Loading";

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
                ? <Loading /> : <div onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} style={{ background: "var(--background)", width: "100vw", height: "100vh" }} data-theme={this.state.theme} className="mainDiv">
                    <Menu handleIsNow={this.handleIsNow} handleTheme={this.handleTheme} handleLeft={this.goDown} handleRight={this.goUp} handleRoomName={this.toggleNames}></Menu>
                    <Return />
                    {this.renderMenu()}
                    {this.state.floor === 0 && <ENSIBS_RDC key={"0" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end} isLandScape={this.state.isLandscape} />}
                    {this.state.floor === 1 && <ENSIBS_E1 key={"1" + this.state.key.toString()} ical={this.state.ical} isNow={this.state.isNow} start={this.state.start} end={this.state.end} isLandScape={this.state.isLandscape} />}
                </div>
        )
    }
}

export default ENSIBS
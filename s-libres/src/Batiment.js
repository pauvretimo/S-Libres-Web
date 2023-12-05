import React from "react";

class Batiment extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            ical: {},
            isLoading: true,
            floor: 0,
            theme: "light",

            isNow: true,
            start: new Date(),
            end: new Date(),
            key: 0,
            isLandscape: true,
            showNames: false,

            touchStart: null,
            touchEnd: null,
        };
        this.url = "https://api.cyberlog.dev/get-calendar"
        this.floorNumber = 0;
        this.minSwipeDistance = 100 // in pixels
    }

    handleResize = () => {
        this.setState({ isLandscape: window.innerWidth > window.innerHeight });
    }

    handleIsNow = (t, t1, t2) => {
        this.setState({isNow: t, start: t1, end: t2, key: this.state.key+1});
    }

    handleTheme = () => {

        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);

        this.setState({theme: targetTheme})
    }

    async componentDidMount() {
        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        let storedShowNames = localStorage.getItem('showNames') === "true" || false;
        console.log(localStorage.getItem('showNames') === "true");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        else
            storedTheme = "dark";

        this.setState({ isLoading: true, theme: storedTheme, showNames: storedShowNames }, () => setTimeout(() => {
            this.state.showNames ? this.addNames() : this.removeNames();
        }, 100));

        this.handleResize();
        window.addEventListener("resize", this.handleResize);


    try {
        const result = await this.dlIcal();

        this.setState({
            ical: result,
            isLoading: false
        });
        localStorage.setItem("ical", JSON.stringify(result))

        } catch (error) {
            const result = JSON.parse(localStorage.getItem("ical"))
            if (result === null) {
                console.log("ERROR : Aucun planning disponible")
            } else {
            this.setState({
                ical: result,
                isLoading: false
            });
            }
        }
    }

    dlIcal = async () => {
        try {
            const response = await fetch(this.url);
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
    }

    goUp = () => {
        if (this.state.floor + 1 < this.floorNumber) {
            const n = this.state.floor + 1
            this.setState({floor: n}, () => this.state.showNames ? this.addNames() : this.removeNames());
        }
    }

    goDown = () => {
        if (this.state.floor - 1 >= 0) {
            const n = this.state.floor - 1
            this.setState({floor: n}, () => this.state.showNames ? this.addNames() : this.removeNames())
        }
    }

    goTo = (i) => {
        if(i >= 0 && i < this.floorNumber) {
            this.setState({floor: i}, () => this.state.showNames ? this.addNames() : this.removeNames())
        }
    }

    addNames = (events) => {
        console.log("addNames");
        // get g tag element
        let g = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "g")[0];
        // get all rooms to list
        let rooms = document.getElementsByClassName("room");

        // create text element for each room
        for (let i = 0; i < rooms.length; i++) {
            const room = rooms[i];
            // get room center point with getBoundingClientRect()
            let bbox = room.getBBox();
            let x = bbox.x + 5;
            let y = bbox.y - 50;

            let wrapper = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
            wrapper.setAttribute("class", "roomName");
            wrapper.setAttribute("x", x);
            wrapper.setAttribute("y", y);
            wrapper.setAttribute("width", (bbox.width-10).toString() + "px");
            wrapper.setAttribute("height", (bbox.height+100).toString() + "px");
            
            let p = document.createElement("p");
            p.innerHTML = room.getAttribute("id");

            wrapper.appendChild(p);

            g.appendChild(wrapper);
        }

        this.setState({showNames: true}, localStorage.setItem("showNames", "true"));
    }

    removeNames = () => {
        // get all text with className "roomName" and delete them
        let texts = document.getElementsByClassName("roomName");
        while (texts.length > 0) {
            texts[0].remove();
        }
        this.setState({showNames: false}, localStorage.setItem("showNames", "false"));
    }

    toggleNames = () => {
        if (document.getElementsByClassName("roomName").length > 0 && this.state.showNames) {
            this.removeNames();
        } else {
            this.addNames();
        }
    }

    onTouchStart = (e) => {
        this.setState({touchStart: e.targetTouches[0].clientX, touchEnd: null})
    }

    onTouchMove = (e) => this.setState({touchEnd: e.targetTouches[0].clientX})
    
    onTouchEnd = () => {
        if (!this.state.touchStart || !this.state.touchEnd) return
        const distance = this.state.touchStart - this.state.touchEnd
        const isLeftSwipe = distance > this.minSwipeDistance
        const isRightSwipe = distance < -this.minSwipeDistance
        if (isLeftSwipe) this.goUp()
        if (isRightSwipe) this.goDown()
    }

    renderMenu = () => {
        return (
        <div className="floorSelection"
            style={
                this.state.isLandscape 
                    ? {width: "35px", left: "20px", top: "50%", height: "70vh", gridAutoFlow: "row", transform: "translateY(-50%)", gap: "5vh"} 
                    : {height: "35px", bottom: "20px", left: "50%", width: "80vw", gridAutoFlow: "column", transform: "translateX(-50%)", gap: "5vw"}
                }
        >
        {
            Array.from(Array(this.floorNumber).keys()).map((i) => {
                
                return <div className="floorButtonDiv" onClick={() => this.goTo(i)} 
                    style={this.state.floor === i ? {color: "white", transform: "scale(112%)"} : {color: "#bbbbbb", transform: "scale(100%)"}}
                    width= {this.state.isLandscape ? "35px" : "auto"}
                    height= {this.state.isLandscape ? "auto" : "35px"}
                    >
                        <p className="floorButtonText">
                            {i}
                        </p>
                    </div>
            })   
        }
    </div>
    );
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Batiment;
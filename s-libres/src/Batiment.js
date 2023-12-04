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
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
        else
            storedTheme = "dark";

        this.setState({ isLoading: true, theme: storedTheme });

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
            this.setState({floor: n})
        }
    }

    goDown = () => {
        if (this.state.floor - 1 >= 0) {
            const n = this.state.floor - 1
            this.setState({floor: n})
        }
    }

    goTo = (i) => {
        if(i >= 0 && i < this.floorNumber) {
            this.setState({floor: i})
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
                    ? {width: "35px", left: "20px", top: "50%", height: "70vh", gridAutoFlow: "row", transform: "translateY(-50%)", gap: "3vh"} 
                    : {height: "35px", bottom: "20px", left: "50%", width: "80vw", gridAutoFlow: "column", transform: "translateX(-50%)", gap: "3vw"}
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
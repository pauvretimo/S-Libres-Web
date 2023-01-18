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
        };
        this.url = "https://api.cyberlog.dev/get-calendar"
        this.floorNumber = 0;
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

    dlIcal = () => {
        return fetch(this.url).then((response) => {
            return response.json();
        }).catch(error => console.log(error));
    }

    goUp = () => {
        if (this.state.floor + 1 < this.floorNumber) {
            const n = this.state.floor + 1
            this.setState({floor: n})
        }
        console.log(this.state.floor)
    }

    goDown = () => {
        if (this.state.floor - 1 >= 0) {
            const n = this.state.floor - 1
            this.setState({floor: n})
        }
        console.log(this.state.floor)
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Batiment;
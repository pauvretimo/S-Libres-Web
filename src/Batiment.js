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
        };
        this.url = "https://api.cyberlog.dev/get-calendar"
        this.floorNumber = 0;
    }

    handleIsNow = (t, t1, t2) => {
        this.setState({isNow: t, start: t1, end: t2, key: this.state.key+1});
    }

    handleTheme = () => {
        const t = this.state.theme;
        const background = document.body.style.backgroundColor
        console.log(background)
        document.body.style.backgroundColor = background === "rgb(45, 45, 47)" ? "#dde" : "#2d2d2f"
        this.setState({theme: t === "light" ? "dark" : "light"})
    }

    async componentDidMount() {

        localStorage.clear()

        this.setState({ isLoading: true });
        console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setState({theme: "dark"})
            document.body.style.backgroundColor = "#2d2d2f";
        }


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
    }

    goDown = () => {
        if (this.state.floor - 1 >= 0) {
            const n = this.state.floor - 1
            this.setState({floor: n})
        }
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Batiment;
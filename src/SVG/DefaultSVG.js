import React from "react";
import PropTypes from 'prop-types';

class DefaultSVG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "none",
            eventId: false,
            eventColor: "black",
            loaded: false,
        }
        this.isNow = props.isNow;
        this.start = props.start;
        this.end = props.end;
        this.orientation = props.orientation;
        this.ical = props.ical;
    }

    coloringNow = () => {
        const json = this.ical;
        if (json != null) {
            const keys = Object.keys(json);
            const rooms = document.getElementsByClassName("room");
            const date = new Date(new Date(Date.now()).toUTCString());
            const nearDate = new Date(date.getTime() + 30 * 60000)
            for (const room of rooms) {
                if (keys.includes(room.id)) {
                    const st = json[room.id]["start"]
                    const nd = json[room.id]["end"]
                    room.style.fill = "#0f0"
                    room.style.stroke = "#0f0"
                    let i = 0;
                    let isFree = true;
                    while (i < st.length && isFree) {
                        const d1 = new Date(st[i])
                        const d2 = new Date(nd[i])
                        if (d1 <= nearDate && d2 > nearDate) {
                            room.style.fill = "#ff6200"
                            room.style.stroke = "#ff6200"
                        }
                        if (d1 <= date && d2 > date) {
                            room.style.fill = "#f00"
                            room.style.stroke = "#f00"
                            isFree = false
                        }
                        i++
                    }
                } else {
                    room.style.fill = "#0f0"
                    room.style.stroke = "#0f0"
                }
            }
        }
    }

    coloring = (start, end) => {
        const json = this.ical;
        if (json != null) {
            const keys = Object.keys(json);
            const rooms = document.getElementsByClassName("room");
            for (const room of rooms) {
                if (keys.includes(room.id)) {
                    const st = json[room.id]["start"]
                    const nd = json[room.id]["end"]
                    room.style.fill = "#0f0"
                    room.style.stroke = "#0f0"
                    let i = 0;
                    let isFree = true;
                    while (i < st.length && isFree) {
                        const d1 = new Date(st[i])
                        const d2 = new Date(nd[i])
                        if (d1 <= end && d2 > start) {
                            room.style.fill = "#f00"
                            room.style.stroke = "#f00"
                            isFree = false
                        }
                        i++
                    }
                } else {
                    room.style.fill = "#0f0"
                    room.style.stroke = "#0f0"
                }
            }
        }
    }

    reload = () => {
        if (this.start === undefined || this.end === undefined) {
            this.coloringNow()
        } else {
            this.isNow
                ? this.coloringNow()
                : this.coloring(this.start, this.end)
        }
    }

    componentDidMount() {
        this.reload();
        window.addEventListener('mouseup', (e) => {
            let id = e.target.id
            if (!(id === "")) {
                let color = e.target.style.fill.replace(')', ', 0.8)').replace('rgb', 'rgba')
                this.setState({id: id, eventId: true, eventColor: color})
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.reload()
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

DefaultSVG.propTypes = {
    orientation: PropTypes.bool,
    ical: PropTypes.object,
    isNow: PropTypes.bool,
    start: PropTypes.object,
    end: PropTypes.object,
}

DefaultSVG.defaultProps = {
    orientation: true,
    ical: {},
    isNow: true,
    start: new Date(),
    end: new Date(),

}

export default DefaultSVG;
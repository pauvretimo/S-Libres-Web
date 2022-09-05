import React from "react";
import {Link} from "react-router-dom"

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/vannes"}>Vannes</Link>
                <Link to={"/lorient"}>Lorient</Link>
            </div>
        )
    }
}

export default Homepage
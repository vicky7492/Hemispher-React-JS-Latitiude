import React from "react";
import north from "./images/northen.png"
import south from "./images/southern.png"


const hemispherConfig = {
    northern: {
        text: "You are in Northen Hemisphere",
        picture: north
    },
    southern: {
        text: "You are in Southern Hemisphere",
        picture: south
    }
}

const HemisphereDisplay = (props) => {
    const hemis = props.latitude > 0 ? hemispherConfig.northern : hemispherConfig.southern
    return (
        <div className="content">
            <div>Latitude is {props.latitude}<br /></div>
            <div>You are in {hemis.text}</div>

            <img src={hemis.picture}></img>
        </div>
    )
}

export default HemisphereDisplay;
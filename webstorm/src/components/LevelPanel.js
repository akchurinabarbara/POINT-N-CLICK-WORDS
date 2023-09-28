import "./CardPanel.css"
import React from "react";
import LevelCard from "./LevelCard";
import CardPanel from "./CardPanel";

class LevelPanel extends React.Component {
    generateCards() {
        let content = [];
        for(let i=0; i< this.props.count; i++){
            content.push( <div><LevelCard level={i + 1}/></div>)
        }

        return content;
    }

    render() {
        return <CardPanel>
            {this.generateCards()}
        </CardPanel>
    }
}
export default  LevelPanel
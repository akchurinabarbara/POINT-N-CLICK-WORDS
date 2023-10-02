import "./CardPanel.css"
import React from "react";
import LevelCard from "./LevelCard";
import CardPanel from "./CardPanel";

class LevelPanel extends React.Component {
    generateCards() {
        let content = [];
        for(let i=0; i< this.props.count; i++){
            content.push( <div key={i}><LevelCard levelId={i} disable={i > this.props.currentLevel} onClick={this.props.onClick}/></div>)
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
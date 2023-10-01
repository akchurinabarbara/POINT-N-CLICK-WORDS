import "./CardPanel.css"
import React from "react";
import CardPanel from "./CardPanel";
import WordCard from "./WordCard";
import levels from "../data/levels.json";

class LevelPanel extends React.Component {
    generateCards() {
        let content = [];
        let level = this.props.level;
        for(let i=0; i< level["words"].length; i++){
            content.push( <div><WordCard word={level["words"][i]["word"]}
                                         isRight={level["words"][i]["isRight"]}
                                         rightClick={this.props.rightClick}
                                         key={i}
            /></div>)
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
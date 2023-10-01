import './Buttons.css';
import React from "react";
class LevelCard extends React.Component {
    render() {
        return <a className={"button-menu-default"} href={`/game/${this.props.levelId}`}>
            {this.props.levelId + 1}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>

    }
}
 export default  LevelCard
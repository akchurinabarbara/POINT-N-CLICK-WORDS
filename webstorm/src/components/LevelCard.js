import './LevelCard.css';
import React from "react";
class LevelCard extends React.Component {
    render() {
        return <a href="/game">{this.props.level}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </a>

    }
}
 export default  LevelCard
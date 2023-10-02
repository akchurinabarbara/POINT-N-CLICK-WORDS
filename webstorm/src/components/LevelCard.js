import './Buttons.css';
import React from "react";
class LevelCard extends React.Component {
    render() {
        return <button disabled={this.props.disable}
                  className={this.props.disable?"button-menu-disable" : "button-menu-default"}
                  onClick={()=>this.props.onClick(this.props.levelId)}>
            {this.props.levelId + 1}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>

    }
}
 export default  LevelCard
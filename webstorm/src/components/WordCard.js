import './Buttons.css';
import React from "react";
import {isDisabled} from "@testing-library/user-event/dist/utils";

class WordCard extends React.Component {
    state ={
        isRight: this.props.isRight,
        word: this.props.word,
        isDisabled: false,
        buttonStyle : "button-default"
}

    onClick() {
        if(this.props.isRight){
            this.setState({buttonStyle: "button-right"})
            this.props.rightClick();
        }
        else {
            this.setState({buttonStyle: "button-wrong"})
        }

        this.setState({isDisabled: true})
    }

    render() {
        return <button className={this.state.buttonStyle}
                       onClick={()=>{this.onClick();}}
                       disabled={this.state.isDisabled}>
            {this.state.word}
        </button>
    }
}
 export default  WordCard
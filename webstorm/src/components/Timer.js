import "./Timer.css"
import { useTimer } from 'react-timer-hook';
import React from "react";

function Timer({ expiryTimestamp,  onTimeOut}){
    const {
        totalSeconds,
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        resume,
        restart,
        autoStart
    } = useTimer({ expiryTimestamp, autoStart: true, onExpire: () => onTimeOut() });

    return(
        <div className={"timer-box"}>
            <span>{minutes}</span>:<span>{seconds}</span>
        </div>
    )
}

export default  Timer;
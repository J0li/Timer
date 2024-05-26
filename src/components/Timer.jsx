import React, { useState, useEffect } from "react";
import './Timer.css';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        let interval;
        if (started) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [started]);

    const startTimer = () => {
        setStarted(true);
    };

    const pauseTimer = () => {
        setStarted(false);
    };

    const resetTimer = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setStarted(false);
    };


    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0);
            setMinutes(minutes + 1);
        }

        if (minutes === 60) {
            setMinutes(0);
            setHours(hours + 1);
        }
    }, [seconds, minutes, hours]);

    return (
        <div className="timer-box">
            <h2>Timer</h2>
            <div>
                <span>{hours < 10 ? ` 0${hours}` : hours}</span>
                <span>{minutes < 10 ? ` 0${minutes}` : minutes}</span>
                <span>{seconds < 10 ? ` 0${seconds}` : seconds}</span>
            </div>
            <div>
                {!started ? (
                    <button className="btn-start" onClick={startTimer}>Start</button>
                ) : (
                    <button className="btn-pause" onClick={pauseTimer}>Pause</button>
                )}
                <button className="btn-reset" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;
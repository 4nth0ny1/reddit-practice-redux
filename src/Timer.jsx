import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super (props)
        this.state = {
            seconds: 0, 
            // timer: null, 
            stop: false,
            start: false,
            pause: false 
        }
    }


    render() {

        const incrementTimer = () => {
            this.setState({
                seconds: this.state.seconds + 1
            })
        }

        const startTime = () => {
            incrementTimer()
            this.timerInterval = setInterval(() => {
                incrementTimer()
            }, 1000)
        }

        const handleStart = () => {
            this.setState({
                start: true
            })
            startTime()
        }

        const handlePause = () => {
            if (this.state.pause) {
                startTime()
            } else {
                pauseTime()
            }

            this.setState({
                pause: !this.state.pause
            })
        }

        const pauseTime = () => {
            clearInterval(this.timerInterval)
        }

        const handleStop = () => {
            pauseTime()
            this.setState({
                seconds: 0, 
                start: false, 
                pause: false, 
                stop: false
            })
        }

        return (
            <>
                <br></br>
                <br></br>
                
                <p>Time: {this.state.seconds}</p>
                <button onClick={handleStart}>start</button>
                
                { !this.state.stop && <button onClick={handleStop}>stop</button> }

                { this.state.start && <button onClick={handlePause}>{this.state.pause ? 'resume' : 'pause'}</button> }
                <br></br>
                <br></br>
            </>
    
        )
    }
}

export default Timer 
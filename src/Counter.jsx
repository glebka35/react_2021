import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: props.startSeconds}
    }

    componentDidMount() {
        this.tickTimerId = setInterval(() => this.tick(), this.props.tickInterval)

    }

    componentWillUnmount() {
        this.turnOffTimer()
    }

    tick() {
        if (this.state.seconds === this.props.endSeconds) {
            this.turnOffTimer()
            return
        }
        this.setState((prevState) => {
            return {seconds: prevState.seconds + 1 }
            }
        )
    }

    turnOffTimer() {
        clearInterval(this.tickTimerId)
    }

    render() {
        return (
            <div className="counter">
                <p className="centeredText">This is {this.props.name} counter!</p>
                <p className="centeredText bigText">{this.state.seconds}</p>
            </div>
        )
    }
}
import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: props.seconds}
    }

    componentDidMount() {
        this.tickTimerId = setInterval(() => this.tick(), 1000)
        setTimeout(() => this.turnOffTimer(), 11000)
    }

    componentWillUnmount() {
        this.turnOffTimer()
    }

    tick() {
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
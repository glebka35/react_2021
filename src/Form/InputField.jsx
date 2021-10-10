import React from "react";

export class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onValueChanged(e.target.value)
    }

    render() {
        return (
            <div>
                <h8>
                    {this.props.name}
                </h8>
                <input value={this.props.value} onChange={this.handleChange} />
            </div>
        )
    }
}
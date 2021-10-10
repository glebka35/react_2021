import React from "react";
import {InputForm} from "./InputForm";
import {DisplayForm} from "./DisplayForm"

export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleContactChange = this.handleContactChange.bind(this)
        this.onButtonClicked = this.onButtonClicked.bind(this)
        this.state = {name: '', contact: '', shouldShowData: false}
    }

    handleNameChange(name) {
        this.setState({name: name})
    }

    handleContactChange(contact) {
        this.setState({contact: contact})
    }

    onButtonClicked() {
        this.setState({shouldShowData: true})
    }

    render() {
        return (
            <div>
                <InputForm
                    name={this.state.name}
                    contact={this.state.contact}
                    onNameChanged={this.handleNameChange}
                    onContactChanged={this.handleContactChange}
                    onButtonClicked={this.onButtonClicked}/>
                <DisplayForm
                    shouldDisplay={this.state.shouldShowData}
                    name={this.state.name}
                    contact={this.state.contact}/>
            </div>
        )
    }
}
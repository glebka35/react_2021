import React from "react";
import {InputField} from "./InputField";

export class InputForm extends React.Component {
    render() {
        return (
            <div>
                <InputField name="Ваше имя:  " value={this.props.name} onValueChanged={this.props.onNameChanged}/>
                <InputField name="Контакт для связи:  " value={this.props.contact} onValueChanged={this.props.onContactChanged}/>
                <button onClick={this.props.onButtonClicked}>Показать введенные данные</button>
            </div>
        )
    }
}
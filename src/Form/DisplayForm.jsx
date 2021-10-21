import React from "react";

export class DisplayForm extends React.Component {
    render() {
        const shouldDisplay = this.props.shouldDisplay
        return (
            <div>
            { shouldDisplay &&
                <div>
                    <p>
                        Ваше имя: {this.props.name}
                    </p>
                    <p>
                        Ваш контакт для связи: {this.props.contact}
                    </p>
                </div>
            }
            </div>
        )
    }
}
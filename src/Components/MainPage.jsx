import {Component} from "react";
import {Typography} from "antd";

export class MainPage extends Component {
    render() {
        return (
            <div>
                <Typography.Title>
                    Главная
                </Typography.Title>
                <Typography.Paragraph>
                    Скоро здесь появится возможность записаться на стирку!
                </Typography.Paragraph>
            </div>
        )
    }
}
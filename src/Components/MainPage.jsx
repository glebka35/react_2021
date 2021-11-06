import {Component} from "react";
import moment from 'moment';
import {Typography, Form, Input, Button, DatePicker} from "antd";

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this)
        this.onFinishFailed = this.onFinishFailed.bind(this)
        this.state = {
            isShowSign: false,
            date: ""
        }
    }
    onFinish(values) {
        console.log(values)
        this.setState({
            isShowSign: true,
            date: values.date.format("dddd, MMMM Do YYYY, h:mm a")
        })
    }

    onFinishFailed(errorInfo) {
        this.setState({isShowSign: false})
    }

    disabledDate(current) {
        return current < moment().startOf('day');
    }

    disabledDateTime() {
        return {
            disabledMinutes: () => {
                let disabledMinutes = range(0, 60)
                disabledMinutes.splice(30, 1)
                disabledMinutes.splice(0, 1)
                return disabledMinutes
            },
            disabledSeconds: () => range(0, 60),
        };
    }

    render() {
        return (
            <div>
                <Typography.Title>
                    Записаться на стирку!
                </Typography.Title>
                <Typography.Paragraph>
                    Здесь Вы можете записаться на стирку в удобное для Вас время! Стиральная машина будет зарезервирована для Вас!
                </Typography.Paragraph>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Ваше имя"
                        name="username"
                        rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Выберите время"
                        name="date"
                        rules={[{ required: true, message: 'Пожалуйста, выберите время для записи!' }]}
                    >
                        <DatePicker
                            format="YYYY-MM-DD HH:mm:ss"
                            disabledDate={this.disabledDate}
                            disabledTime={this.disabledDateTime}
                            showTime={{
                                hideDisabledOptions: true,
                                defaultValue: moment('00:00:00', 'HH:mm:ss')
                            }}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Записаться!
                        </Button>
                    </Form.Item>
                </Form>
                { this.state.isShowSign &&
                    <Typography.Paragraph>
                        Вы успешно записались на {this.state.date}
                    </Typography.Paragraph>
                }
            </div>
        )
    }
}
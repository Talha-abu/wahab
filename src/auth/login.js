import React from "react";
import Log from "../img/login.jpg";

import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <div className="container">
            <Row>
            <Col flex={2}>
                <img className="w-100" src={Log} alt="doctor"/>
            </Col>
            <Col flex={2}>
                <div style={{marginTop: "6rem"}}>
                    <div className="text-center" >
                        <h1>Welcome Back Doctor</h1>
                        <h6>Let's get your Logged In</h6>
                    </div>
                    <div>
                        <Form
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            offset: 4,
                            span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                            offset: 4,
                            span: 16,
                            }}
                        >
                            <Button className="bg-success w-100" type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className="text-center">
                    <h6>Alternative Login Options</h6>  
                </div>
            </Col>
            </Row>
            
        </div>
    );
};



export default Login;
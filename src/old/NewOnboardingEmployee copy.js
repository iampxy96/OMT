import React, { useState } from 'react'
import {
    Form,
    Input,
    Button,
    Select,
  } from 'antd';

export default function NewOnboardingEmployee() {

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Form
        labelCol={{
            span: 4,
        }}
        wrapperCol={{
            span: 14,
        }}
        layout="horizontal"
        initialValues={{
            size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}

        onSubmit
        >
        <Form.Item label="First Name">
            <Input />
        </Form.Item>
        <Form.Item label="Last Name">
            <Input />
        </Form.Item>
        <Form.Item label="Department">
            <Input />
        </Form.Item>
        <Form.Item label="Team">
            <Input />
        </Form.Item>
        <Form.Item label="Joining Date">
            <Input />
        </Form.Item>
        <Form.Item label="Choose Template">
            <Select>
            <Select.Option value="none">None</Select.Option>  
            <Select.Option value="butterfly">Butterfly</Select.Option>
            <Select.Option value="manager">Manager</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Submit">
            <Button>Submit</Button>
        </Form.Item>
        </Form>
  )
}
import React from "react";
import { Form, Input, Button } from "antd";
const isSVG = require("is-svg");

export default function SVGUploadForm({updateSVG}) {
    const[form] = Form.useForm();

    //handles uploading of new svg data
    const onSubmit = (formData) => {
        let newSVG = {
            title: formData.title,
            svg: formData.svg,
        };
        
        //checking validity or updating list of svg
        if(isSVG(newSVG.svg)) {
            updateSVG(newSVG);
            alert(`SVG ${newSVG.title} has been submitted to GUN`);
        }
        else {
            alert(`${newSVG.title} is not a valid SVG.`)
        }
        //remove input fields
        form.resetFields();
    };

    //output error for uploading invalid svg
    const onFinishFailed = (errorInfo) => {
        console.log("Failed SVG input: ", errorInfo);
    };

    //component for the form with two inputs and a submit button
    return (
        <>
            <Form
                name="svg-upload-form"
                form={form}
                labelCol={{span: 8}}
                wrapperCol={{span: 8}}
                initialValues={{remember: false}}
                onFinish={onSubmit}
                onFinishedFailed={onFinishFailed}
                autoComplete="off"
            >
                
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Please enter a title for the SVG.",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    label="SVG"
                    name="svg"
                    rule={[
                        {
                            required: true,
                            message: "Please enter a valid SVG as a string.",
                        }
                    ]}
                >
                    <Input.TextArea rows={15} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form.Item>
            </Form>
        </>
    );
}
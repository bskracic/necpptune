import { Button, Card, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getExams, uploadSubmission } from '../rest';

const SubmissionUploadPage = () => {

    const [file, setFile] = useState();
    const [exams, setExams] = useState();
    const navigate = useNavigate();

    const upload = (values) => {
        console.log(values)
        uploadSubmission(file, values.name, values.term, values.createdBy)
        .then(r => {
            navigate(`/grading?id=${r.data.id}`);
        })
    }

    const changeHandler = (event) => {
        setFile(event.target.files[0]);
    };

    useEffect(() => {
        getExams().then(res => {
            setExams(res.data.map(e => { return {label: e.name, value: e.id} }))
        })
    })

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'block' }}>
                <Card title="Upload your solution" style={{ width: 500 }}>
                    <Form
                        style={{
                            maxWidth: 600,
                        }}
                        onFinish={upload}
                    >
                        <Form.Item label="Name" name="name" rules={[
                            {
                                required: true,
                                message: 'Name is required',
                            },
                        ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Term" name="term" rules={[
                            {
                                required: true,
                                message: 'Term is required',
                            },
                        ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Exam" name="examId">
                            <Select
                                options={exams}
                            />
                        </Form.Item>
                        <Form.Item label="Created by" name="createdBy">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Zip" name="zip" rules={[
                            {
                                required: true,
                                message: 'Zip is required',
                            },
                        ]}>
                            <Input type="file" onChange={changeHandler}></Input>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">Upload</Button>
                        </Form.Item>

                    </Form>
                </Card>

            </div>
        </div>
    );
};

export default SubmissionUploadPage;
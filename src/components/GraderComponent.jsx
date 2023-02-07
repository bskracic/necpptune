import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, InputNumber, Layout, message, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import { getGroupsByExam, getTask, getTasksByExamAndGroup } from '../rest';
const { Header, Content, Sider } = Layout;


const GraderComponent = (props) => {

    const [tasks, setTasks] = useState([]);
    const [examGroups, setExamGroups] = useState([]);
    const [points, setPoints] = useState();
    const [task, setTask] = useState(JSON.parse('{ "id": 12, "name": "Zadatak 1", "text": "Lorem ipsum", "learning_outcome": 3, "group": "A", "max_points": 5 }'));
    
    const [messageApi, contextHolder] = message.useMessage();
    // TODO: check for previously selected group
    const examId = 6;

    useEffect(() => {
        getGroupsByExam(examId).then(res => {
            setExamGroups(res.data.map(group => { return { label: group, value: group } }))
        }).catch(err => console.log(err))
    })

    const onExamGroupChanged = (group) => {
        getTasksByExamAndGroup(examId, group).then(res => {
            setTasks(res.data.map(task => { return { label: task.name, value: task.id } }))
        })
    }

    const gradeTask = () => {
        messageApi.open({
            type: 'success',
            content: 'Grade saved!',
            duration: 1
        });
        // const data = {
        //     taskId: task.id,
        //     scorredPoints: points,
        //     note: "note" // TODO add note component
        // }
        // updateTaskSubmission(props.taskSubmissionId, data).then(() => {
        //     messageApi.success("Grade saved!")
        // })
    }


    const onTaskChanged = (value) => {
        console.log(value);
        getTask(value).then(res => {
            setTask(res.data)
        })
    }

    return (
        <Content>
            {contextHolder}
            <Layout>
                <Sider width="55%" style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white', width: '100%' }}>
                        <Row>
                            <Col span={18}>
                                <Space>
                                    <Breadcrumb>
                                        <Breadcrumb.Item>
                                            <UserOutlined />
                                            <span>{props.taskSubmission.student.name} {props.taskSubmission.student.surname}</span>
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </Space>
                            </Col>
                            <Col span={6}>
                                <Space>

                                </Space>
                            </Col>
                        </Row>
                    </Header>
                    <CodeEditor />
                </Sider>
                <Content>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Space align="end">
                            <Select
                                placeholder="Group"
                                onChange={onExamGroupChanged}
                                style={{ width: 100 }}
                                options={examGroups}
                            />

                            <Select
                                placeholder="Task"
                                onChange={onTaskChanged}
                                style={{ width: 150 }}
                                options={tasks}
                            />

                            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                                <InputNumber
                                    placeholder="Points"
                                    defaultValue={task.maxPoints}
                                    min="0"
                                    max={task.maxPoints}
                                    style={{ width: 70 }}
                                    step="0.50"
                                    value={points}
                                />
                                / {task.maxPoints}
                            </div>

                            <Button
                                style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bolder', width: 100 }}
                                Pftype="text"
                                onClick={gradeTask}>
                                GRADE
                            </Button>
                        </Space>
                    </Header>
                    <Card
                        bordered={false}
                        style={{
                            width: "100%",
                            borderRadius: 0,
                        }}
                    >
                        <p>({task.group}) <strong>LO{task.learningOutcome}, {task.name}</strong> {task.prompt}</p>
                    </Card>
                </Content>
            </Layout>
        </Content>
    );
};

export default GraderComponent;
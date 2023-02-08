import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import GraderComponent from '../components/GraderComponent';
import StudentFileTree from '../components/StudentFileTree';
import { getSourceFile, getSubmission, getSubmissionTask } from '../rest';
const { Header, Sider } = Layout;


const GraderPage = () => {

    const submissionId = 'c72213cf-bbdc-4fdf-98f8-bf7d3959939d'; // TODO replace this
    const [taskSubmissions, setTaskSubmissions] = useState([]);
    const [selectedTaskSubmission, setSelectedTaskSubmission] = useState({})

    useEffect(() => {
        async function fetch() {
            const res = await getSubmission(submissionId);
            
                const data = res.data.map(sub => {
                    return {
                        title: sub.infoedukaSlug,
                        key: sub.infoedukaSlug,
                        children: sub.submissionTasks.map(st => {
                            return {
                                title: st.fileDetails,
                                key: st.id,
                                isLeaf: true,
                                student: `${sub.name} ${sub.surname}`
                            }
                        })
                    };
                })
            setTaskSubmissions(data);
        }
        fetch();
    }, [])

    const onSelectionChanged = (info) => {
        const stId = info.node.key;
        getSubmissionTask(stId).then(res => {
            getSourceFile(res.data.fileLink).then(res2 => {
                setSelectedTaskSubmission({...res.data, sourceText: res2.data})
            })
            
        })
    }

    return (
        <Layout>
            <Layout>
                <Sider width={300} style={{ height: "100%" }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        Solutions
                    </Header>
                    <StudentFileTree treeData={taskSubmissions} onSelectionChanged={onSelectionChanged}/>
                </Sider>
                <Layout>
                    <GraderComponent taskSubmission={selectedTaskSubmission} />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default GraderPage;
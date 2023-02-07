import { Layout } from 'antd';
import React, { useEffect } from 'react';
import GraderComponent from '../components/GraderComponent';
import StudentFileTree from '../components/StudentFileTree';
const { Header, Sider } = Layout;

const GraderPage = () => {

        const submissionId = 'b07052e8-ad41-4cb2-baae-0ef4c4ef945d'; // TODO replace this
    const task_submission = JSON.parse('{ "student": { "id": 1, "identifier": "vpetrina", "name": "Viktor", "surname": "Petrina", "group": "1RP1" }, "task": { "id": 12, "name": "Zadatak 1", "text": "Lorem ipsum", "learning_outcome": 3, "group": "A", "max_points": 5 }, "submission": { "date": 12345, "term": "winter-01", "description": "lol" }, "file_details": "Task1/Source.cpp", "file_link": "actual-link-to-file", "scorred_points": 3, "note": "" }')
    const [submission, setSubmissions] = useState();
    
    
    useEffect(() => {
        getSubmission(submissionId).then(res => {

            const rawSubmissions = res.data.map(st => {
                return {
                    title: st.fileDetails,
                    key: st.id,
                    isLeaf: true
                }
            });

            submissionsTree = {}
            // rawSubmissions.forEach(val => {
            //     submission['']
            // })
            setSubmissions()
        })
    })

    return (
        <Layout>
            <Layout>
                <Sider width={300} style={{ height: "100%" }}>
                    <Header style={{backgroundColor: 'white'}}>
                        Solutions
                    </Header>
                    <StudentFileTree treeData={treeData}/>
                </Sider>
                <Layout>
                    <GraderComponent taskSubmission={task_submission}/>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default GraderPage;
import { Card } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    const goToGrade = () => {
        navigate("/upload")
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'block', padding: 200}}>
            <Card
                onClick={goToGrade}
                hoverable
                style={{
                    width: 500,
                    margin: 25
                }}
            >
                <h1>Start Grading</h1>
            </Card>
            <Card
                hoverable
                style={{
                    width: 500,
                    margin: 25
                }}
            >
                <h3>Edit Exams</h3>
            </Card>
            <Card
                hoverable
                style={{
                    width: 500,
                    margin: 25
                }}
            >
                <h3>Grading History</h3>
            </Card>
            </div>
        </div>
    );
};

export default LandingPage;
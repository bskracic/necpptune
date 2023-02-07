import axios from 'axios';
const BASE_API_URL = 'http://localhost:3000/api/v1'

async function uploadSubmission(file, name, term, createdBy) {
    const data = new FormData();
    data.append("zip", file);
    data.append("name", name);
    data.append("term", term);
    data.append("createdBy", createdBy);

    const res = await axios({
        method: "POST",
        url: `${BASE_API_URL}/submission/upload`,
        data: data,
        headers: {"Content-Type": "multipart/form-data" }
    })

    return await res;
}

async function getExams() {
    return await axios({
        method: "GET",
        url: `${BASE_API_URL}/exam`,
    })
}


async function getGroupsByExam(examId) {
    return await axios({
        method: "GET",
        url: `${BASE_API_URL}/exam/${examId}/groups`
    })
}

async function getTasksByExamAndGroup(examId, examGroup) {
    return await axios({
        method: "GET",
        url: `${BASE_API_URL}/task?exam_id=${examId}&exam_group=${examGroup}`
    })
}

async function getTask(taskId) {
    return await axios({
        method: "GET",
        url: `${BASE_API_URL}/task/${taskId}`,
    })
}

async function updateTaskSubmission(submissionTaskId, data) {
    return await axios({
        method: 'PATCH',
        data: data,
        url: `${BASE_API_URL}/submission/task/${submissionTaskId}`
    })
}

async function getSubmission(submissionId) {
    return await axios({
        method: 'GET',
        url: `${BASE_API_URL}/submission/${submissionId}`
    })
}


export {
    uploadSubmission,
    getExams,
    getGroupsByExam,
    getTasksByExamAndGroup,
    getTask,
    updateTaskSubmission,
    getSubmission
};


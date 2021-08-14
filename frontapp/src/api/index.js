import axios from 'axios';

export const saveStudent = async (name,password,loginId) => {
    const url = 'http://localhost:8000/api/signup';
    return axios.post(url, {name, password,loginId}).then(res => res.data).catch(err => console.log(err))
}

export const loginstudent = async (loginId, password) => {
    const url = 'http://localhost:8000/api/login';
    return axios.post(url, { password,loginId}).then(res => res.data).catch(err => console.log(err))
}

export const getQuestion = async () => {
    const url = 'http://localhost:8000/api/data';
    return axios({
        method: 'GET',
        headers: {},
        url
    }).then(res => res.data).catch(err => console.log(err))
}

export const askQuestion = async (created_by_user_id,question) => {
    const url = 'http://localhost:8000/api/question';
    return axios.post(url, {created_by_user_id,question}).then(res => res.data).catch(err => console.log(err))
}


export const submitAnswer = async (question_id, answer_by_user_id,answer) => {
    const url = 'http://localhost:8000/api/answer';
    return axios.post(url, {question_id, answer_by_user_id,answer}).then(res => res.data).catch(err => console.log(err))
}
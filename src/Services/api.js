import axios from 'axios';
const URL = 'http://localhost:3000'



export const getCategories = () => {
    return axios.get(`${URL}/category`)
};

export const getQuestion = (id) => {
    return axios.get(`${URL}/questions/${id}`)
}

export const getRanking = ()=>{
    return axios.get(`${URL}/ranking`)
}

export const validateResponse = (id,response,userId) => {
    return axios.post(`${URL}/questions/validate/${id}`,response,userId)
}

export const login = ({email,password}) => {
    return axios.post(`${URL}/users/login`,{email,password})
}
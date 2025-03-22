import axios from "axios"

const userApi = axios.create({
    baseURL: 'http://localhost:8000/login/ingreso/'
})

export const getAllUsers = () => {
    return userApi.get('/')
}

export const addUser = (user) => {
    return userApi.post('/', user)
}

export const deleteUser = (id) => {
    return userApi.delete(`/${id}/`)
}

export const updateUser = (id, user) => {
    return userApi.put(`/${id}/`, user)
}

export const getUser = (id) => {
    return userApi.get(`/${id}/`)
}
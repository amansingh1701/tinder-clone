import axios from "axios"

const instance = axios.create({
    baseURL: 'https://tinder-backend1701.herokuapp.com/'
})

export default instance;
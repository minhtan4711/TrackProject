import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const instance = axios.create({
    // ngrok http 8080 to create a server
    baseURL: 'http://53e724032c33.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, // call everytime we make a request
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
import axios from 'axios'

export default axios.create({
    // ngrok http 8080 to create a server
    baseURL: 'http://21b0f20f1c3c.ngrok.io'
})
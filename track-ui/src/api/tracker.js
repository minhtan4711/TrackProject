import axios from 'axios'

export default axios.create({
    // ngrok http 8080 to create a server
    baseURL: 'http://8a7a493424b4.ngrok.io'
})
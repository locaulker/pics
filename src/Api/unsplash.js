import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WTRXGow4AHyCIEQBlS3KkaH3ABYzTsIqc9MAvAzMwKs'
    }
})
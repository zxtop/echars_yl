import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config=>{
    return config
},error=>{
    return Promise.reject(error)
})

axios.interceptors.response.use(response=>{
    return response
},error=>{
    return Promise.resolve(error.response)
})

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then(response => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

export default{
    mockdata(url,params){
        return fetch(url,params);
    }
}
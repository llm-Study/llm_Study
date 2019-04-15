import axios from 'axios';
import qs from 'qs';
let axiosGet = (api) => {
    return new Promise((resolve, reject) => {
        axios.get(api).then(res => {
            if (res.status >= 200 && res.status <= 300) {
                resolve(res.data)
            }
        }).catch(error => {
            reject(error)
        })
    })
}
let axiosPost = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params), {
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            if (res.status >= 200 & res.status <= 300) {
                resolve(res.data)
            }
        }).catch(error => {
            reject(error)
        })
    })
}
export {
    axiosGet,
    axiosPost
}
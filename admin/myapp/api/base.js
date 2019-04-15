import axios from 'axios'
import qs from 'qs'

function axiosGet(api) {
    return new Promise((resolve, reject) => {
        axios.get(api).then(res => {
            if (res.status >= 200 && res.status <= 300) {
                resolve(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

function axiosPost(api, params) {
    return new Promise((resovle, reject) => {
        let par = toString.call(params) === "[object FormData]" ? params : qs.stringify(params);
        axios.post(api, par).then(res => {
            if (res.status >= 200 && res.status <= 300) {
                resovle(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}
export {
    axiosPost,
    axiosGet
};
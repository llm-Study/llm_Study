import axios from 'axios'
import qs from 'querystring'
axios.interceptors.request.use(config=>{})
function axiosGet(api) {
    return new Promise((resolve, reject) => {
        axios.get(api).then(res => {
            if (res.status == 200 && res.status <= 300) {
                resolve(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

function axiosPost(api, parms) {
    return new Promise((resolve, reject) => {
        let par = toString.call(parms) === "[object FormData]" ? parms : qs.stringify(parms);
        axios.post(api, par).then(res => {
            if (res.status == 200 && res.status <= 300) {
                resolve(res.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}
export {
    axiosGet,
    axiosPost
}
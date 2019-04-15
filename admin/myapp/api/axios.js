import {
    axiosGet,
    axiosPost
} from './base'
let http = 'http://localhost:3000/users/'
export default {
    getuserList: () => {
        return axiosGet(http + 'getlist')
    },
    postuser: (params) => {
        return axiosPost(http + 'signin', params)
    },
    updateuser: (params) => {
        return axiosPost(http + 'update', params)
    },
    addarticle: (params) => {
        return axiosPost(http + 'addarticle', params)
    },
    selarticle: () => {
        return axiosGet(http + 'selarticle')
    }
}
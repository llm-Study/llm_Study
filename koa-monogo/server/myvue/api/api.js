import {
    axiosGet,
    axiosPost
} from './base';
let http = 'http://localhost:3000/'
export default {
    getList: () => {
        return axiosGet()
    },
    addUserApi: (parmas) => {
        return axiosPost(http + 'addUser', parmas)
    },
    loginUser: (parmas) => {
        return axiosPost(http + 'loginUser', parmas)
    }
}
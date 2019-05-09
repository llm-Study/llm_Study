import {
    axiosGet,
    axiosPost
} from './base';
let http = 'http://localhost:3000/'
export default {
    getUserList: () => {
        return axiosGet(http + 'getuserList')
    },
    addUserApi: (parmas) => {
        return axiosPost(http + 'addUser', parmas)
    },
    loginUser: (parmas) => {
        return axiosPost(http + 'loginUser', parmas)
    },
    updateStatus: (parmas) => {
        return axiosPost(http + 'updateStatus', parmas)
    }
}
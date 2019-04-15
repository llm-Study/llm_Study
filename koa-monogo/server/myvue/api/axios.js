import {
    axiosGet,
    axiosPost
} from './base';
let http = 'http://localhost:3000/users/'
export default {
    //查询
    getusers: () => {
        return axiosGet(http + 'getuserlist')
    },
    //注册
    postusers: (parame) => {
        return axiosPost(http + 'postuser', parame)
    },
    //登录
    login: (parame) => {
        return axiosPost(http + 'loginuser', parame)
    }
}
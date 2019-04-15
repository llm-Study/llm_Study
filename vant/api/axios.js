import {GetAxios,PostAxios} from './base'
export default {
    get:()=>{
        return GetAxios('http://127.0.0.1:1234/getuser')
    },
    post:()=>{
        return PostAxios('http://127.0.0.1:1234/add');
    }
}
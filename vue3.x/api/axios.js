import {axiosPost,axiosGet} from "./base";
let http = 'http://localhost:3000/';
export default {
  postdeletedatalist: (params) => {
    return axiosPost(http + "del", params);
  },
  getdataimglist: () => {
    return axiosGet(http + 'getimg');
  },
  getdatauserlist: () => {
    return axiosGet(http + 'getuser')
  },
  postaddlist:(params)=>{
    return axiosPost(http + 'add',params)
  }
};
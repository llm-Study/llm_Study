import axios from "axios";
import qs from 'qs'
function axiosPost(api, params) {
  return new Promise((resolve, reject) => {
    let par = toString.call(params) === "[object FormData]" ? params : qs.stringify(params);
    axios.post(api,par).then(function(res) {
        if (res.status >= 200 && res.status <= 300) {
          resolve(res.data);
        }
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

function axiosGet(api) {
  return new Promise((resolve, reject) => {
    axios.get(api).then(function(res) {
        if (res.status >= 200 && res.status <= 300) {
          resolve(res.data);
        }
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
export { axiosPost, axiosGet};
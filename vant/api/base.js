import axios from 'axios';
function GetAxios(api){
    return new Promise((resolve,eject)=>{
        axios.get(api).then(res=>{
            if(res.status >=200&&res.status<=300){
                resolve(res.data)
            }
        }).catch(err=>{
            eject(err)
        })
    })
}
function PostAxios(api,params){
    return new Promise((resolve,eject)=>{
         axios.post(api,params).then(res=>{
             if(res.status>=200&&res.status<=300){
                 resolve(res.data)
             }
         }).catch(err=>{
             eject(err)
         })
    })
}
export {GetAxios,PostAxios};
// import axios from 'axios'

// let token = ''

// if(localStorage.getItem('token')){
//     let userStorage = localStorage.getItem('token')
//     let userStorageJson = JSON.parse(userStorage)
//     token = userStorageJson
// }else{
//     token = ''
// }

// const backendService = axios.create({
//     //baseURL: 'http://localhost:8000/api/',
//     baseURL: process.env.VUE_APP_URL_API,
//     withCredentials: true,
//     headers: {
//         // "Content-type": "application/json",
//         "Content-type": "multipath/form-data",
//         "Authorization":`Bearer ${token}`
//     }
// })

// export default backendService

import axios from 'axios'

const backendService = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
    withCredentials: true,
    headers: {
        "Content-type": "multipath/form-data",
        "Accept": "application/json",
    }
})

//การใช้ Interceptor เพื่อแทรกตัว token เข้าไปใน header
backendService.interceptors.request.use(config => {
    let token = ''
    try{
        let userStorage = localStorage.getItem('token')
        //let userStorageJSON = JSON.parse(userStorage)
        token = userStorage
        console.log(token)
    }catch(error){
        console.log(error)
    }

    if(token){
        config.headers.Authorization = "Bearer "+token
    }

    return config

})

export default backendService
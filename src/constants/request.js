import axios from "axios"

const request = axios.create({
  baseURL:"https://65256f5e67cfb1e59ce747d7.mockapi.io/" ,
  timeout : 10000 ,
})

export default request
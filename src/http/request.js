import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

// 请求统一设置
const config = {
    method: 'POST'
}
const request = axios.create(config)

// 请求拦截器
request.interceptors.request.use((config) => {
    // 序列化参数
    config.data = qs.stringify(config.data)

    return config
})

// 响应拦截器
request.interceptors.response.use((response) => {

}, (error) => {
    if (error.response) { // 请求收到响应，状态码超出了2XX
        const { status } = error.response
        if (status === 400) {
            Message.error('请求参数错误')
        } else if (status === 401) {
            Message.error('登录超时，请重新登录')
        } else {
            Message.error('请求失败')
        }
    } else if (error.request) { // 请求发出去了但是没有收到响应，一般为请求超时
        Message.error('请求超时')
    } else {
        Message.error(`请求未知错误：${error.message}`)
    }

    // 最后把请求失败的错误对象抛出，扔给上一个调用者
    return Promise.reject(error)
})

export default request
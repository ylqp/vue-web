import request from '../request'
import {
    checkCode,
    loginApi
} from '../api'
// 获取验证码
export const getCheckCode = () => {
    return request({
        url: checkCode,
        responseType: 'arraybuffer'
    })
}
// 登录
export const login = (data) => {
    return request({
        url: loginApi,
        data
    })
}
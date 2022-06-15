<template>
    <div class="login">
        <header>
            <div>
                <span class="col_blue f31 fb mr3">OTS</span>
                <span class="fb f15">在线考试与作业系统</span>
            </div>
        </header>
        <figure>
            <img src="@/assets/image/ots/pic.png" />
        </figure>
        <div class="login-con">
            <el-form ref="form" :model="form" class="loginForm" :rules="rules">
                <el-form-item prop="userName">
                    <el-input v-model="form.userName" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-button class="loginBtn" type="primary" @click="submitForm('form')">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
import { getCheckCode, login } from '@/http/modules/login'
const loginStatus = {
    'needCheckCode' : '需要验证码',
    'checkCodeError' : '验证码错误',
    'noUserName' : '用户名不存在',
    'maxFailTime' : '半小时内错误次数超过5次',
    'passwordError' : '密码错误',
    'userDisenabled' : '用户停用',
    'userNorole' : '用户无权限',
    'orgDisenabled' : '组织机构已停用',
}
export default {
    name: 'otsLogin',
    data () {
        return {
            loginParams: {
                roleType: 1, // 老师
                needCheckCode: 0,
                name: "",
                pass: "",
                checkCode: "",
                tenant: this.$route.query.tenant || 'cate'
            },
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ],
                checkCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur'}
                ]
            }
        }
    },
    async created () {
        const data = await getCheckCode()
        console.log(data)
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                console.log(valid)
                if (valid) {
                    this.loginFn()
                } else {
                    this.$message.error('请填写登录信息')
                    return false
                }
            })
        },
        async loginFn () {
            const { data } = await login(this.loginParams)
            console.log(data)
        }
    }
}
</script>
<style lang="less" scoped>
@image: '../../assets/image';
.login {
    width: 100%;
    height: 100%;
    background-image: url('@{image}/ots/logBg.png');
    background-size: 100% 100%;
    position: relative;
    header{
        height: 10%;
        background-color: #fff;
        opacity: 1;
        box-shadow: 0px 1px 0px 0px rgb(0 0 0 / 8%);
        display: flex;
        align-items: center;
        padding: 0 40px;
    }
    figure {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 60%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    // &-con{
    .login-con{
        position: absolute;
        top: 50%;
        right: 15%;
        /**沿Y轴平移自己的60% 垂直居中是50%*/
        transform: translateY(-60%);
        padding: 50px 80px;
        background-color: #fff;
        border-radius: 5px;
        .loginForm {
            display: flex;
            flex-direction: column;
            align-items: center;
            .loginBtn {
                width: 100%;
            }
        }
    }
}
</style>
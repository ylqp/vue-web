<template>
    <div class="reset-password">
      <div class="pc-content">
        <div class="login-header">
          <div class="container">
            <div class="logo">
              <img src="../../../assets/images/login-logo.png" alt="">
            </div>
          </div>
        </div>
        <div class="login-content">
          <div class="login-box">
            <div class="reset-pass-header">重置密码</div>
            <div class="reset-pass-step-box">
              <div class="step-item" :class="[step > 0 ? 'active' : '']">
                <div class="step-item-num">1</div>
                <div class="step-item-name">填写手机号</div>
              </div>
              <div class="step-division" :class="[step > 1 ? 'active' : '']">
                <div class="step-division__"></div>
                <div class="step-division__"></div>
                <div class="step-division__"></div>
              </div>
              <div class="step-item" :class="[step > 1 ? 'active' : '']">
                <div class="step-item-num">2</div>
                <div class="step-item-name">设置密码</div>
              </div>
              <div class="step-division" :class="[step > 2 ? 'active' : '']">
                <div class="step-division__"></div>
                <div class="step-division__"></div>
                <div class="step-division__"></div>
              </div>
              <div class="step-item" :class="[step > 2 ? 'active' : '']">
                <div class="step-item-num">3</div>
                <div class="step-item-name">完成</div>
              </div>
            </div>
            <div class="reset-pass-form">
              <el-form ref="resetPass" :rules="rule1" :model="resetPass" v-if="step === 1">
                <el-form-item label="" prop="mobile">
                  <el-input type="text" v-model="resetPass.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="" prop="code">
                  <div class="code-form">
                    <div class="code-form-item">
                      <el-input type="text" v-model="resetPass.code" placeholder="请输入验证码"></el-input>
                    </div>
                    <div v-if="codeTime <= 0" class="get-code-btn" @click="getCode" :class="[checkMobile ? 'active':'']">获取验证码</div>
                    <div v-else class="code-time">{{codeTime}}s</div>
                  </div>
                </el-form-item>
                <el-form-item>
                  <div class="next" @click="next" :class="[ isNext ? 'active'  : '' ]">下一步</div>
                </el-form-item>
              </el-form>
              <el-form ref="resetPass" :rules="rule2" :model="resetPass" v-if="step === 2">
                <el-form-item label="" prop="newPassword" :key="1">
                  <el-input :type="getInputStatus('isShowPass')" v-model="resetPass.newPassword" placeholder="请输入新密码">
                    <i
                      class="el-icon-view el-input__icon"
                      :class="[isShowPass ? 'active':'']"
                      slot="suffix"
                      @click="handleIconClick('isShowPass')">
                    </i>
                  </el-input>
                </el-form-item>
                <el-form-item label="" prop="confirmNewPassword" :key="2">
                  <el-input :type="getInputStatus('isShowConfirmPass')" v-model="resetPass.confirmNewPassword" placeholder="请再次输入新密码">
                    <i
                      class="el-icon-view el-input__icon pass-icon"
                      :class="[isShowConfirmPass ? 'active':'']"
                      slot="suffix"
                      @click="handleIconClick('isShowConfirmPass')">
                    </i>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <div class="next" @click="confirmPass" :class="[isConfirmActive ? 'active' : '']">确定</div>
                </el-form-item>
              </el-form>
              <div class="reset-finsh" v-if="step === 3">
                <div class="reset-success-icon">
                  <img src="../../../assets/images/reset-pass-success-icon.png" alt="">
                </div>
                <div class="reset-success-text">密码修改成功</div>
                <div class="auto-go-login">
                  <span>自动</span>
                  <span>跳转登录页面,</span>
                  <span>等待时间{{pushTime}}s</span>
                </div>
              </div>
            </div>
          </div>
          <div class="login-footer">
            <div class="help">奇迹曼特网校 ©2018 官方网站 帮助</div>
            <div class="icp">版权所有：北京恩跃时代教育科技有限公司 京ICP备 10041891 号</div>
          </div>
        </div>
      </div>
      <div class="mobile-content">
        <Header></Header>
        <div class="mobile-reset-pass-content">
          <div class="m-reset-pass-title" v-if="step !== 3">重置密码</div>
          <div class="m-reset-pass-form">
            <el-form :model="resetPass" :rules="rule1" v-if="step === 1">
              <el-form-item prop="mobile">
                <el-input v-model="resetPass.mobile" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <div class="m-code-item">
                  <div class="m-code-input">
                    <el-input v-model="resetPass.code" placeholder="请输入验证码"></el-input>
                  </div>
                  <div v-if="codeTime <= 0" class="m-getcode-btn" @click="getCode">获取验证码</div>
                  <div v-else class="m-getcode-btn">{{codeTime}}s</div>
                </div>
              </el-form-item>
              <el-form-item>
                <div class="m-next-btn" @click="next" :class="[isNext ? 'active' : '']">下一步</div>
              </el-form-item>
            </el-form>
            <el-form :model="resetPass" :rules="rule2" v-if="step === 2">
              <el-form-item prop="newPassword" :key="1">
                <el-input type="password" v-model="resetPass.newPassword" placeholder="请输入新密码"></el-input>
              </el-form-item>
              <el-form-item prop="confirmNewPassword" :key="2">
                <el-input type="password" v-model="resetPass.confirmNewPassword" placeholder="请再次输入新密码"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="m-next-btn" @click="confirmPass" :class="[isConfirmActive ? 'active' : '']">确定</div>
              </el-form-item>
            </el-form>
            <div class="m-reset-success" v-if="step === 3">
              <div class="m-reset-success-icon">
                <img src="../../../assets/images/m-reset-success-icon.png" alt="">
              </div>
              <div class="m-reset-success-text">密码修改成功</div>
              <div class="m-go-login">
                <span>自动</span>
                <span>跳转登录页面</span>
                <span>,等待时间2s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import * as validationForm from '../../../utils/validationForm'
  import Header from '../../../components/common/header/Header2'
  // import { resetPassSendCode, verifyCode } from '../../../api/newwebsite'
  import { sendCode, verifyCode, editPassword } from '@/api/login/index'

  export default {
    name: 'resetPassword',
    data () {
      return {
        step : 1,
        pushTime : 2,
        resetPass : {
          mobile : '',
          code : '',
          newPassword : '',
          confirmNewPassword : '',
          token : ''
        },
        getCodeForm : {
          mobile : '',
          code : '',
        },
        rule1 : {
          mobile : [
            { required : true, trigger : 'blur', validator : validationForm.checkMobile}
          ],
          code : [
            { required : true, trigger : 'blur', message: '请输入验证码'}
          ]
        },
        rule2 : {
          newPassword : [
            { required : true, trigger : 'blur', message : '请输入密码'}
          ],
          confirmNewPassword : [
            { required : true, trigger : 'blur', validator : (rule,value,callback) => validationForm.checkNewPassword(rule,value,callback,this.resetPass)}
          ]
        },
        isShowPass : false,
        isShowConfirmPass : false,
        codeTime : 0
      }
    },
    components : {
      Header
    },
    computed : {
      isConfirmActive () {
        let {
          newPassword,
          confirmNewPassword
        } = this.resetPass
        return (newPassword && confirmNewPassword) && (newPassword === confirmNewPassword)
      },
      isNext () {
        let {
          mobile,
          code
        } = this.resetPass
        return mobile && code && validationForm.isvalidPhone(mobile)
      },
      checkMobile () {
        let {
          mobile
        } = this.resetPass
        return validationForm.isvalidPhone(mobile)
      }
    },
    methods : {
      handleIconClick (key) {
        this[key] = !this[key]
      },
      getInputStatus (key) {
        return this[key] ? 'text' : 'password'
      },
      next () {
        if (this.isNext) {
          let {  mobile, code } = this.resetPass
          verifyCode({
            mobile,
            code
          }).then(res => {
            if (res.data.code === 20000) {
              this.resetPass.token = res.data.data.token
              this.step = 2
            } else {
              this.$message.error(res.data.message)
            }
          })
        }
      },
      getCode () {
        let { mobile } = this.resetPass
        if (this.checkMobile) {
          sendCode({ mobile }).then(res => {
            if (res.data.code === 20000) {
              this.codeTime = 60
              this.codeTimer = setInterval(() => {
                if (this.codeTime <= 0) {
                  clearInterval(this.codeTimer)
                }
                this.codeTime--
              },1000)
            } else {
              this.$message.error(res.data.message)
            }
          })
        }
      },
      confirmPass () {
        if (this.isConfirmActive) {
          let {
            mobile,
            token,
            newPassword,
            confirmNewPassword
          } = this.resetPass
          let params = {
            mobile,
            token,
            new_password : newPassword,
            new_password_re : confirmNewPassword
          }
          editPassword(params).then(res => {
            if (res.data.code === 20000) {
              this.step = 3
              this.pushTime = 2
              setInterval(() => {
                if (this.pushTime === 0) {
                  this.$router.push({path: '/login'})
                }
                this.pushTime --
              }, 1000)
            } else {
              this.$message.error(res.data.message)
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @function torem($px) {
    @return ($px / 8) * 1rem;
  }
  .el-input__icon.active {
    color: #FF5E13;
  }
  .pc-content,.reset-password,.mobile-content {
    height: 100%;
  }
  .mobile-content {
    /deep/.mobile-nav {
      border-bottom: 1px solid #E8E8E8;
    }
  }
  .mobile-reset-pass-content {
    height: calc(100% - 6rem);
    background-image: url("../../../assets/images/m-reset-pass-bgc.png");
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: torem(60);
    .m-reset-pass-title {
      color: #333;
      font-size: torem(16);
      text-align: center;
      font-weight: bold;
    }
    .m-reset-success {
      margin-top: torem(100);
      .m-reset-success-icon {
        display: flex;
        justify-content: center;
        img {
          width: torem(49);
          height: torem(49);
        }
      }
      .m-reset-success-text {
        font-size: torem(20);
        color: #08BD6B;
        font-weight: bold;
        text-align: center;
        margin: torem(13) 0 torem(15);
      }
      .m-go-login {
        font-size: torem(12);
        color: #666;
        text-align: center;
      }
      .m-go-login {
        span:nth-child(2) {
          color: #FF5E13;
        }
      }
    }
    .m-reset-pass-form {
      box-sizing: border-box;
      padding: 0 torem(24);
      margin-top: torem(34);
      .m-next-btn {
        height: torem(44);
        background: #D5D5D5;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: torem(14);
        color: #fff;
        margin-top: torem(30);
      }
      .m-next-btn.active {
        background: linear-gradient(to right,#FF972A,#FF5E13);
      }
      .m-code-item {
        display: flex;
        justify-content: space-between;
        .m-code-input {
          width: torem(200);
        }
        .m-getcode-btn {
          width: torem(120);
          height: torem(44);
          border: 1px solid #FF5E13;
          color: #FF5E13;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: torem(16);
          border-radius: torem(5);
        }
      }
      /deep/.el-form-item {
        margin-bottom: torem(25);
      }
      /deep/.el-form-item__error {
        font-size: torem(12);
        line-height: torem(16);
      }
      /deep/.el-form-item__error:before {
        font-size: torem(8);
      }
      /deep/.el-input__inner {
        width: 100%;
        height: torem(45);
        font-size: torem(16);
        /*border: 1px solid #E5E5E5;*/
      }
      /deep/.el-input__inner::-webkit-input-placeholder {
        font-size: torem(16);
      }
    }
  }

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 880px;
    margin: 0 auto;
    height: 500px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 20px 30px 0px rgba(153, 153, 153, 0.15);
    box-sizing: border-box;
    padding: 40px 60px;
    .reset-pass-header {
      color: #333;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 16px;
      border-bottom: 1px solid #EEEEEE;
    }
    .reset-pass-step-box {
      margin-top: 20px;
      background: #FFF8F4;
      height: 46px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      .step-item.active {
        .step-item-num {
          background-color: #FF5E13;
          color: #fff;
        }
        .step-item-name {
          color: #FF5E13;
        }
      }
      .step-item {
        display: flex;
        align-items: center;
        .step-item-num {
          width: 28px;
          height: 28px;
          background-color: #D8D8D8;
          color: #fff;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        .step-item-name {
          margin-left: 14px;
          color: #666666;
          font-size: 13px;
          font-weight: bold;
        }
      }
      .step-division.active {
        .step-division__ {
          background-color: #FF5E13;
        }
      }
      .step-division {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 30px;
        .step-division__ {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #D5D5D5;
        }
        .step-division__:nth-child(2) {
          margin: 0 8px;
        }
      }
    }
    .reset-pass-form {
      display: flex;
      justify-content: center;
      margin-top: 60px;
      .next.active {
        background: linear-gradient(to right,#FF972A,#FF5E13);
      }
      .next {
        width: 300px;
        height: 40px;
        background: #D5D5D5;
        border-radius: 100px;
        color: #fff;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      }
      .code-form {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .code-time {
          width: 100px;
          height: 38px;
          background: #fff;
          color: #FF5E13;
          border: 1px solid #FF5E13;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .get-code-btn {
          cursor: pointer;
          width: 102px;
          height: 38px;
          border: 1px solid #D5D5D5;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          margin-top: 2px;
        }
        .get-code-btn.active {
          border: 1px solid #FF5E13;
          color: #FF5E13;
        }
      }
      /deep/.el-form {
        width: 300px;
      }
      /deep/.el-input__inner {
        width: 100%;
      }
      /deep/.el-form-item {
        margin-bottom: 20px;
      }
      .code-form-item {
        width: 190px;
      }
    }
    .reset-finsh {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .reset-success-icon {
        margin-bottom: 14px;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .reset-success-text {
        color: #08BD6B;
        font-size: 24px;
        font-weight: bold;
      }
      .auto-go-login {
        margin-top: 14px;
        color: #666;
        font-size: 16px;
        span:nth-child(2) {
          color: #FF5E13;
        }
      }
    }
  }
  .login-header {
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    position: relative;
    z-index: 20;
    .logo {
      img {
        width: 290px;
        height: 54px;
      }
    }
  }
  .login-content {
    height: calc(100% - 80px);
    background-image: url("../../../assets/images/login-bgc.png");
    background-size: 100% 100%;
    position: relative;
  }
  .login-footer {
    width: 100%;
    position: fixed;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .help,.icp {
      color: #626070;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 991px){
    .pc-content {
      display: none;
    }
    .mobile-content {
      display: block;
    }
  }
  @media screen and (min-width: 992px){
    .pc-content {
      display: block;
    }
    .mobile-content {
      display: none;
    }
  }
</style>

<template>
    <div class="login">
        <header>123</header>
        <figure>
          
        </figure>
        <div class="login-con">

        </div>
    </div>
</template>
<script>
export default {
  name: 'otsLogin'
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
    }
    &-con{
        position: absolute;
        top: 50%;
        right: 160px;
        /**沿Y轴平移自己的60% 垂直居中是50%*/
        transform: translateY(-60%);
        padding: 20px;
        background-color: #fff;
    }
}
</style>
<template>
  <div>
        <header>
            <div>ots | 在线考试系统</div>
            <div @click="handleColor">切换主题色</div>
        </header>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <input type="color" v-model="aa">
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetBaseColor">重 置</el-button>
                <el-button type="primary" @click="changeBaseColor">确 定</el-button>
            </span>
        </el-dialog>
  </div>
</template>
<script>
export default {
    name: 'OtsHeader',
    data () {
        return {
            aa: window.localStorage.getItem('--baseColor') ? window.localStorage.getItem('--baseColor') : '#006AFF',
            dialogVisible: false
        }
    },
    beforeCreate () {
        let baseColor = window.localStorage.getItem('--baseColor')
        if (baseColor) {
            document.body.style.setProperty('--base-color', baseColor)
        }
    },
    methods: {
        handleColor () {
            this.dialogVisible = true
        },
        changeBaseColor () {
          document.body.style.setProperty('--base-color', this.aa)
          window.localStorage.setItem('--baseColor', this.aa)
          this.dialogVisible = false
        },
        resetBaseColor () {
            this.aa = '#006AFF'
        }
    }
}
</script>
<style lang="less" scoped>
header {
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    background: @base-color;
    color: @l-color;
}
</style>
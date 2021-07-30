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
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="changeColor">确 定</el-button>
          </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
    name: 'Less',
    data () {
        return {
            aa: '#006AFF',
            dialogVisible: false
        }
    },
    methods: {
        handleColor () {
            this.dialogVisible = true
        },
        changeColor () {
          document.body.style.setProperty('--base-color', this.aa)
          this.dialogVisible = false
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
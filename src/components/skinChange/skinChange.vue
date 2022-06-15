<template>
    <div class="skinChange">
        <div @click="handleColor">切换主题色</div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <input type="color" v-model="initialColor">
            <span slot="footer" class="dialog-footer">
                <el-button round @click="resetBaseColor">重 置</el-button>
                <el-button type="primary" round @click="changeBaseColor">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
/**
 * 换肤思路
 * 1、用的css变量和less 其实主要是css变量
 */
export default {
    name: '',
    data () {
        return {
            initialColor: window.localStorage.getItem('--baseColor') ? window.localStorage.getItem('--baseColor') : '#006AFF',
            dialogVisible: false,
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
        resetBaseColor () {
            this.initialColor = '#006AFF'
        },
        changeBaseColor () {
            document.body.style.setProperty('--base-color', this.initialColor)
            window.localStorage.setItem('--baseColor', this.initialColor)
            this.dialogVisible = false
        }
    }
}
</script>
<style scoped>
</style>
<template>
  <div>
        <header>
            <div>ots | 在线考试系统</div>
            <!-- 换肤 -->
            <skin-change />
        </header>
  </div>
</template>
<script>
import skinChange from '../skinChange/skinChange.vue'
export default {
  components: { skinChange },
    name: 'OtsHeader',
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
header {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: @base-color;
    color: @l-color;
}
</style>
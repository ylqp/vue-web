<template>
    <div style="height: 100%" class="layout">
      <div class="left-sider" :class="isCollapsed ? 'collapsed' : ''" >
        <SideMenu />
      </div>
      <div>
        <header>2-1</header>
        <div>
          <el-button @click="isCollapsed = !isCollapsed">ddd</el-button>
        </div>
      </div>
    </div>
    <!-- <div>
        <ots-header />
        <router-view/>
    </div> -->
</template>
<script>
import otsHeader from './ots-header.vue'
import SideMenu from './components/side-menu.vue'
export default {
  components: { otsHeader, SideMenu },
  name: 'main',
  data () {
    return {
      isCollapsed: false
    }
  }
}
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  .left-sider {
    overflow: hidden;
    flex: 0 0 256px;
    background: #001529;
    transition: all .2s ease-in-out;
  }
  .left-sider.collapsed {
    flex: 0 0 64px;
  }
}
</style>
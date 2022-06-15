<template>
  <div class="side-menu">
    <slot name="sideTop"></slot>
    <div>
        
    </div>
    <slot name="sideBottom"></slot>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style>
.side-menu {
    color: #fff;
}
</style>
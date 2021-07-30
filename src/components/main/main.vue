<template>
    <div>
        <ots-header />
        <router-view/>
    </div>
</template>
<script>
import otsHeader from './ots-header.vue'
export default {
  components: { otsHeader },
  name: ''
}
</script>
<style scoped>
</style>
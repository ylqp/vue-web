<template>
    <div>
        <el-button @click="goHome">goHome</el-button>
    </div>
</template>
<script>
export default {
  name: '',
  methods: {
    goHome () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style scoped>
</style>
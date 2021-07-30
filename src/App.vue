<template>
    <div id="app" class="themeBlue">
        <router-view/>
    </div>
</template>

<style lang="less">
.size {
    width: 100%;
    height: 100%;
}
html,body{
    .size;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#app{
    .size
}
</style>

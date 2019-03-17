<template>
  <header class="m-header">
    <div class="logo">M-UI</div>
    <div class="version">v1.0.0</div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped lang="scss">
  .m-header{
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    border-bottom: 1px solid #dcdfe6;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>

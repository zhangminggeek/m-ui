<template>
  <div class="m-container">
    <h2 class="page__title">按钮 Button</h2>
    <p class="page__description">常用的操作按钮。</p>
    <p class="page__subtitle">基础用法</p>
    <m-button>default</m-button>
    <m-button type="primary">primary</m-button>
    <m-button type="success">success</m-button>
    <m-button type="info">info</m-button>
    <m-button type="warning">warning</m-button>
    <m-button type="danger">danger</m-button>
    <p class="page__subtitle">禁用状态</p>
    <m-button disabled>default</m-button>
    <m-button type="primary" disabled>primary</m-button>
    <m-button type="success" disabled>success</m-button>
    <m-button type="info" disabled>info</m-button>
    <m-button type="warning" disabled>warning</m-button>
    <m-button type="danger" disabled>danger</m-button>
    <p class="page__subtitle">文字按钮</p>
    <m-button type="text">default</m-button>
    <m-button type="text" disabled>disabled</m-button>
    <p class="page__subtitle">不同尺寸</p>
    <m-button>default</m-button>
    <m-button size="medium">medium</m-button>
    <m-button size="small">small</m-button>
    <m-button size="mini">mini</m-button>
  </div>
</template>

<script>
export default {
  name: 'page-button'
}
</script>

<style scoped lang="scss">

</style>

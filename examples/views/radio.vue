<!-- created by zhangming at 2019-04-01 -->
<template>
  <div class="m-container">
    <h2 class="page__title">单选框 Radio</h2>
    <p class="page__description">在一组备选项中进行单选</p>
    <p class="page__subtitle">基础用法</p>
    <m-radio v-model="radio" label="1">备选项</m-radio>
    <m-radio v-model="radio" label="2">备选项</m-radio>
    <p class="page__subtitle">禁用状态</p>
    <m-radio v-model="radio2" label="1" disabled>备选项</m-radio>
    <m-radio v-model="radio2" label="2" disabled>备选项</m-radio>
    <p class="page__subtitle">单选框组</p>
    <m-radio-group v-model="radio3">
      <m-radio label="1">备选项</m-radio>
      <m-radio label="2">备选项</m-radio>
      <m-radio label="3">备选项</m-radio>
    </m-radio-group>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      radio: '1',
      radio2: '1',
      radio3: '1'
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

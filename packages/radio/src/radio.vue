<!-- created by zhangming at 2019-04-01 -->
<template>
  <label
    class="mm-radio">
    <span
      class="mm-radio__input"
      :class="[
        { 'is-checked': model === label },
        { 'is-disabled': disabled }
      ]">
      <span class="mm-radio__inner"></span>
      <input
        class="mm-radio__original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
        @change="handleChange">
    </span>
    <span class="mm-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MRadio',
  props: {
    value: {},
    label: {},
    name: String,
    disabled: Boolean
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

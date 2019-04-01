<template>
  <button
    class="mm-button"
    :class="[
      type ? 'mm-button--' + type : '',
      size ? 'mm-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-text': text
      }
    ]"
    :disabled="disabled"
    @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    type: { type: String, default: 'default' },
    size: { type: String },
    disabled: Boolean,
    text: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

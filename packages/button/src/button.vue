<template>
  <button
    class="mm-button"
    :class="[
      type ? 'mm-button--' + type : '',
      size ? 'mm-button--' + size : ''
    ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MButton',
  props: {
    type: { type: String, default: 'default' },
    size: { type: String }
  }
}
</script>

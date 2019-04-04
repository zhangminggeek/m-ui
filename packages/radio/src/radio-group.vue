<!-- created by zhangming at 2019-04-02 -->
<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'MRadioGroup',
  props: {
    value: {}
  },
  mixins: [Emitter],
  watch: {
    value (val) {
      this.broadcast('MRadio', '', [val])
    }
  }
}
</script>

<style scoped lang="scss">

</style>

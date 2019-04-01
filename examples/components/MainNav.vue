<template>
  <nav class="m-nav f-scrollbar">
    <h4 class="nav__title">组件列表</h4>
    <ul class="nav__group">
      <li
        v-for="item in pageList"
        :key="item.path"
        :class="['nav__item', {'active': item.path === active}]"
        @click="$router.push(item.path)">
        {{item.label}}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data () {
    return {
      pageList: [
        { label: '按钮', path: '/components/button' },
        { label: '单选框', path: '/components/radio' }
      ]
    }
  },
  computed: {
    active () {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
  .m-nav{
    height: 100%;
    padding: 10px 20px;
    margin-top: 50px;
    overflow-y: auto;
    box-sizing: border-box;
    .nav__title{
      margin-bottom: 10px;
    }
    .nav__item{
      line-height: 24px;
      padding: 5px 0;
      cursor: pointer;
      &.active{
        color: #409eff;
      }
    }
  }
</style>

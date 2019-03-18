<template>
  <div>
    <div class="g-header">
      <main-header></main-header>
    </div>
    <div class="g-nav">
      <main-nav></main-nav>
    </div>
    <div class="g-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import MainNav from '../components/MainNav'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainNav
  }
}
</script>

<style lang="scss">
  .g-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 50px;
  }
  .g-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
  }
  .g-container{
    padding: 50px 0 0 200px;
  }
</style>

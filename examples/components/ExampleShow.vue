<!-- created by zhangming at 2019-03-20 -->
<template>
  <div>
    <h3 class="title">{{title}}</h3>
    <p class="description">
      <slot name="desc"></slot>
    </p>
    <div class="content">
      <div class="examples">
        <slot></slot>
      </div>
      <div class="code" v-show="isShow">
        <slot name="code"></slot>
      </div>
      <div class="btn" @click="isShow = !isShow">
        <span>{{isShow ? '隐藏代码' : '显示代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example-show',
  props: {
    title: { type: String, required: true }
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped lang="scss">
  .title{
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
    margin: 55px 0 20px;
  }
  .description{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    margin: 1em 0;
  }
  .content {
    border: 1px solid #dedede;
    .examples {
      padding: 20px;
      border-bottom: 1px solid #dedede;
    }
    .code{
      border-bottom: 1px solid #dedede;
      background-color: #efefef;
      padding: 20px;
      cursor: pointer;
    }
    .btn{
      line-height: 30px;
      text-align: center;
      span{
        font-size: 14px;
        color: #409EFF;
        &:hover{
          opacity: 0.8;
        }
      }
    }
  }
</style>

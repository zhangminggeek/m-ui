/**
 * 向所有子组件广播事件
 * @param componentName {String} 子组件名
 * @param eventName {String} 事件名
 * @param params {Array} 需要广播的参数
 * */
function broadcast (componentName, eventName, params) {
  // 遍历当前节点下的所有子组件
  this.$children.forEach(child => {
    // 获取子组件名称
    const name = child.$options.componentName

    if (name === componentName) {
      // 如果是我们需要广播到的子组件的时候调用$emit触发所需事件，在子组件中用$on监听
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      // 非所需子组件则递归遍历深层次子组件
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    /**
     * 对多级父组件进行事件派发
     * @param componentName {String} 父组件名
     * @param eventName {String} 事件名
     * @param params {Array} 需要派发的参数
     * */
    dispatch (componentName, eventName, params) {
      // 获取父组件，如果以及是根组件，则是$root
      let parent = this.$parent || this.$root
      // 获取父节点的组件名
      let name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        // 当父组件不是所需组件时继续向上寻找
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      // 找到所需组件后调用$emit触发当前事件
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    // 向所有子组件进行事件广播。这里包了一层，为了修改broadcast的this对象为当前Vue实例
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}

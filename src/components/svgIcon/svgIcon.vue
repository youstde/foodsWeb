<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon-icons',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      }
    }
  }
</script>

<style lang='scss'>
  .svg-icon {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
  }
</style>

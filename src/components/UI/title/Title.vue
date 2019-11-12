<template>
  <h1
    :class="[
      { 'title_center': center},
      { 'title_color_white': white},
      'title'
    ]"
  >
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  &_center{
    text-align: center;
    color: $grayMedium;
    font-size: 3rem;
  }
  &_color_white{
    color: #fff;
    text-shadow: 1px 1px 1px $grayMedium;
  }
}
</style>

<template>
  <h1
    :class="[
      { 'title_center': center},
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
    }
  },
  computed: {
    sizeClass: function() {
      let className;
      if (this.size) {
        className = `title_size_${this.size}`;
      }
      return className;
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  &_center {
    text-align: center;
    color: $grayMedium;
    font-size: 3rem;
    margin: 2rem 0;
  }
}
</style>

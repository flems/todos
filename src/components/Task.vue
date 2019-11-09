<template>
  <div class="task">
    <div class="task__checkbox"></div>
    <p class="task__text">{{ text }}</p>
    <div class="task__delete"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
  .task {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    &__checkbox {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border: 1px solid $grayLight;
    }
    &__delete {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }
    &__text {
      padding: 1rem;
      flex-grow: 1;
      color: $gray;
    }
  }
</style>

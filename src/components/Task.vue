<template>
  <div :class="['task', { 'task_completed' : completed }]">
    <div class="task__checkbox" @click="$emit('changeStatus', id)">
      <CheckIcon></CheckIcon>
    </div>
    <p class="task__text">{{ text }}</p>
    <CrossIcon class="task__delete" @click="$emit('deleteTask', id)"></CrossIcon>
  </div>
</template>

<script>
import CrossIcon from "@/assets/img/svg/cross-mark.svg";
import CheckIcon from "@/assets/img/svg/check-mark.svg";

export default {
  props: {
    id: {
      type: Number,
    },
    text: {
      type: String,
      default: ""
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CrossIcon,
    CheckIcon
  }
};
</script>

<style lang="scss" scoped>
  .task {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    cursor: default;
    &_completed {
      .task {
        &__checkbox {
          svg {
            opacity: 1;
          }
        }
        &__text {
          text-decoration: line-through;
          color: $grayMedium;
        }
      }
    }
    &:hover {
      .task {
        &__delete{
          opacity: 1;
        }
      }
    }
    &__checkbox {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border: 1px solid $grayLight;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        width: 12px;
        height: 12px;
        opacity: 0;
        transition: opacity 0.1s linear;
        fill: rgba(0, 128, 0, 0.75);
      }
    }
    &__delete {
      flex-shrink: 0;
      width: 12px;
      height: 12px;
      fill: #fb7171;
      opacity: 0;
      transition: opacity 0.1s linear;
      cursor: pointer;
    }
    &__text {
      padding: 1rem;
      flex-grow: 1;
      color: $gray;
    }
  }
</style>

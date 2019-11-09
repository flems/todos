<template>
  <div class="task-card">
    <div class="task-card__header">
      <UiInput name="task" placeholder="Новая задача"></UiInput>
    </div>
    <div class="task-card__content">
      <Task text="Новая задача"></Task>
    </div>
  </div>
</template>

<script>
import { UiInput } from "@/components/UI/index.js";
import Task from "@/components/Task.vue";

export default {
  components: {
    UiInput,
    Task
  }
};
</script>

<style lang="scss" scoped>
.task-card {
  display: inline-block;
  background: #fff;
  min-height: 60px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &__content {
    box-shadow: inset 0 7px 3px -7px rgba(0, 0, 0, 0.2);
  }
}
</style>

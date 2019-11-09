<template>
  <div class="task-card">
    <UiInput name="task" placeholder="Новая задача"></UiInput>
  </div>
</template>

<script>
import { UiInput } from "@/components/UI/index.js";

export default {
  components: {
    UiInput
  }
};
</script>

<style lang="scss" scoped>
.task-card {
  display: inline-block;
  background: #fff;
  min-height: 60px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
}
</style>

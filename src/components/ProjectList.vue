<template lang="html">
  <div class="project-list">
    <TaskList></TaskList>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskList
  }
};
</script>

<style lang="scss" scoped>
.project-list {
  padding: 2rem 0;
}
</style>

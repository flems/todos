<template>
  <div class="task-card">
    <div class="task-card__header">
      <form class="add-task" @submit.prevent="addTask">
        <UiInput name="parent" type="hidden" :value="1"></UiInput>
        <UiInput name="task" type="text" placeholder="Добавить задачу"></UiInput>
      </form>
    </div>
    <div class="task-card__content">
      <Task
        v-for="item in taskList"
        :key="item.id"
        :text="item.name"
        :completed="item.completed"
        :id="item.id"
        @changeStatus="changeTaskStatus"
        @deleteTask="deleteTask"
      >
      </Task>
    </div>
  </div>
</template>

<script>
import { UiInput } from "@/components/UI/index.js";
import Task from "@/components/Task.vue";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      taskList: state => state.task.list
    })
  },
  methods: {
    ...mapActions([
      'changeTaskStatus',
      'deleteTask',
      'addTask'
    ])
  },
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

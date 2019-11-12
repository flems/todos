<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="task-card">
          <AddTask></AddTask>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Task from "@/components/Task.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  name: "index",
  computed: {
    projectId: function() {
      return this.$route.params.id;
    },
    taskList: function() {
      return this.tasks.filter(item => {
        return item.parent == this.projectId;
      });
    },
    ...mapState({
      tasks: state => state.task.list
    })
  },
  methods: {
    ...mapActions([
      'changeTaskStatus',
      'deleteTask'
    ])
  },
  components: {
    Task,
    AddTask
  }
};
</script>

<style lang="scss">
.task-card {
  display: block;
  background: #fff;
  min-height: 60px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%;
  max-width: 750px;
  margin: 2rem auto;
  &__content {
    box-shadow: inset 0 7px 3px -7px rgba(0, 0, 0, 0.2);
  }
}
</style>

<template>
  <form class="add-task" @submit.prevent="addTask">
    <UiInput name="parent" type="hidden" :value="projectId"></UiInput>
    <UiInput name="task" type="text" placeholder="Добавить задачу"></UiInput>
  </form>
</template>

<script>
import { UiInput } from "@/components/UI/index.js";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    projectId: function() {
      return this.$route.params.id;
    },
    ...mapState({
      taskList: state => state.task.list
    })
  },
  methods: {
    ...mapActions([
      'addTask'
    ])
  },
  components: {
    UiInput
  }
};
</script>

<style lang="scss" scoped>
</style>

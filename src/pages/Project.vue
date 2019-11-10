<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <TaskList></TaskList>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue"

export default {
  name: "index",
  components: {
    TaskList
  }

};
</script>

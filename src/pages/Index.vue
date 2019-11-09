<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <ProjectList></ProjectList>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue"

export default {
  name: "index",
  components: {
    ProjectList
  }

};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="project-list">
          <ProjectList>
            <AddProject></AddProject>
          </ProjectList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue"
import AddProject from "@/components/AddProject.vue";


export default {
  name: "index",
  components: {
    ProjectList,
    AddProject
  }

};
</script>

<style lang="scss">
  .project-list {
    padding: 2rem 0;
  }
</style>

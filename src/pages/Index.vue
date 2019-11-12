<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="project-list">
          <UiTitle title="Список проектов" :center="true" :white="false"></UiTitle>
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
import { UiTitle } from "@/components/UI/index.js";


export default {
  name: "index",
  components: {
    ProjectList,
    AddProject,
    UiTitle
  }

};
</script>

<style lang="scss">
  .project-list {
    margin: 2rem 0;
  }
</style>

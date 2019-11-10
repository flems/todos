<template lang="html">
  <div class="projects">
    <div class="projects__list">
      <div class="projects__item" v-for="item in projects" :key="item.id">
        <p class="projects__title">{{ item.name }}</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      projects: state => state.project.list
    })
  }
};
</script>

<style lang="scss" scoped>
.projects {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  &__item {
    width: 200px;
    margin: 1rem;
    padding: 2rem;
    background: #fff;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    min-height: 86px;
  }
  &__title{
    font-size: 1.5rem;
    font-weight: 600;
    color: $grayMedium;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }
}

</style>

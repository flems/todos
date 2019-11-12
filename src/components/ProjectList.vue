<template lang="html">
  <div class="projects">
    <div class="projects__list">
      <div class="projects__item" v-for="item in projects" :key="item.id">
        <router-link :to="{ name: 'project', params: { id: item.id } }" class="projects__link">
          <p class="projects__title">{{ item.name }}</p>
        </router-link>
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
    margin-left: -1rem;
    margin-right: -1rem;
  }
  &__item {
    width: 200px;
    margin: 0 1rem 1rem;
    background: #fff;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;

  }
  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    color: $grayMedium;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }
  &__link {
    min-height: 86px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>

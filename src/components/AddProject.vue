<template>
  <div :class="[{ 'add-project_active': isActive }, 'add-project']">
    <div class="add-project__icon" @click="setFormState">
      <PlusIcon></PlusIcon>
    </div>
    <form class="add-project__form" @submit.prevent="addProject">
      <UiInput name="project" placeholder="Название проекта"></UiInput>
    </form>
  </div>
</template>

<script>
import { UiInput } from "@/components/UI/index.js";
import PlusIcon from "@/assets/img/svg/add-plus-button.svg";
import { mapActions } from "vuex";

export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    setFormState () {
      this.isActive = !this.isActive;
    },
    ...mapActions([
      'addProject'
    ])
  },
  components: {
    UiInput,
    PlusIcon
  }
}
</script>

<style lang="scss" scoped>
  .add-project {
    background: #fff;
    width: 200px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 1rem;
    &_active {
      .add-project {
        &__form {
          display: block;
        }
        &__icon{
          svg {
            transform: rotate(45deg);
          }
        }
      }
    }
    &__icon {
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        svg {
          fill: $grayMedium;
        }
      }
      svg {
        width: 30px;
        height: 30px;
        fill: $grayLight;
        transition: fill 0.1s linear, transform 0.1s linear;
      }
    }
    &__form {
      display: none;
    }
  }
</style>

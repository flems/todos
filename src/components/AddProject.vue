<template>
  <div :class="[{ 'add-project_active': isActive }, 'add-project']">
    <div class="add-project__icon" @click="setFormState">
      <PlusIcon></PlusIcon>
    </div>
    <form class="add-project__form" @submit.prevent="addProject">
      <UiInput className="add-project__input" ref="add-project-input" name="project" placeholder="Название проекта"></UiInput>
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
      this.setFocus();
    },
    setFocus () {
      this.$refs['add-project-input'].$el.focus();
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
    overflow: hidden;
    &_active {
      .add-project {
        &__form {
          opacity: 1;
          position: static;
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
      opacity: 0;
      position: absolute;
      top: 100%;
      left: 100%;
    }
    &__input {
      border: none;
      box-shadow: inset 0px 1px 5px -3px rgb(164, 164, 164);
    }
  }
</style>

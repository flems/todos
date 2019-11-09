<template>
  <input class="input" type="text" :name="name" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    placeholder: String
  }
};
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid $grayLight;
  padding: 20px;
  display: block;
  outline: none;
  width: 100%;
}
</style>

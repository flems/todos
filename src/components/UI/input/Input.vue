<template>
  <input :class="[className, 'input']" :type="type" :name="name" :placeholder="placeholder" :value="value" autocomplete="off"/>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: "",
    },
    className: {
      type: [String, Number],
      default: "",
    },
  }
};
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid $grayLight;
  padding: 1.5rem;
  display: block;
  outline: none;
  width: 100%;
  &::placeholder {
    font-style: italic;
  }
}
</style>

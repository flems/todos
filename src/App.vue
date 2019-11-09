<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
</style>

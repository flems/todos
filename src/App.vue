<template>
  <div id="app">
    <Header></Header>
    <main class="content">
      <router-view />
    </main>
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

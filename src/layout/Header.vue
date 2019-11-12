<template lang="html">
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <router-link :to="{ path: '/' }">
            <span class="logo">todos</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import "@/assets/css/bootstrap-grid.min.css";
import "@/assets/css/normalize.css";

export default {};
</script>

<style lang="scss">
@import "@/assets/css/global.scss";

.header {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  background: #fff;
  z-index: 10;
}
.logo {
  display: inline-block;
  color: $grayLight;
  font-size: 3rem;
  padding: 1.5rem 0;
  font-weight: 600;
  text-shadow: 1px 1px 1px $grayMedium;
}
</style>

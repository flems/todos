<template lang="html">
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="disclaimer">
            <p class="disclaimer__text">Double-click to edit task</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  background: #fff;
  z-index: 10;
  padding: 1.5rem 0;
}
.disclaimer {
  text-align: center;
  &__text {
    color: #a4a4a4;
    font-size: 0.9rem;
  }
}
</style>

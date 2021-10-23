<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="/">
          <img class="logo" src="@/assets/logo.png" alt="" />
          Rick And Morty Api
        </b-navbar-brand>
      </b-navbar>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      meal: "",
    };
  },
};
</script>
<style >
img.logo {
  width: 45px;
  height: 45px;
}
</style>
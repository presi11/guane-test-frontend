<template>
  <div class="home">
    <h1>Prueba de pipeline numero 2</h1>
   <GridCard />
  </div> 
</template>

<script>
import GridCard from "@/components/GridCard.vue";

export default {
  name: "Home",
  components: {
    GridCard,
  },
};
</script>

<style lang="scss">

body {
  background-image: url("~@/assets/background.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.content-characters:hover {
  background: #1b1b1b;
}
h1 {
  color: #f10606;
}

.background-image {
  width: 100%;
  height: 100%;
  position: sticky;
}
</style>

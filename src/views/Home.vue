<template>
  <div class="home">
   <!--   <img class="background-image" src="@/assets/background.png" alt="background-image"> -->
  
   
    <GridCard :allCharacter="allCharacter" />
  </div>
</template>

<script>
import GridCard from "@/components/GridCard.vue";

export default {
  name: "Home",
  components: {
    GridCard,

  },

  data: function () {
    return {
      allCharacter: null,
      number: 5,
    };
  },

methods:{

},

  async created() {
    let countCharacter = await this.$store.dispatch("getCharacterCount");
    this.allCharacter = countCharacter;
  },
};
</script>

<style lang="scss">
:root {
  --background-body: #ffffff;
  --background-card: #616161;
  --text-white: #ff0000;
  --text-gray: #ff0000;
  --text-orange: #FF9800;
}
 body{
 
  background-image: url("~@/assets/background.png");
  background-repeat: no-repeat;
 background-attachment: fixed;
  
}.content-characters:hover {
    background: #1b1b1b;
}
h1 {
  color: #f10606;
}

.background-image{
  width: 100%;
  height: 100%;
  position: sticky;
}

</style>

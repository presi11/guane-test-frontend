<template>
  <div class="home">
    <GridCard :characters="characters" :allCharacter="allCharacter" />
  </div>
</template>

<script>
// @ is an alias to /src
import GridCard from "@/components/GridCard.vue";

export default {
  name: "Home",
  components: {
    GridCard,
  },

  data: function () {
    return { characters: [],
             allCharacter:null,
     };
  },
  async created() {
      let infoCharacter = await this.$store.dispatch(
        "getCharacter" 
      ) 
     this.characters = infoCharacter;

     let  countCharacter = await this.$store.dispatch(
        "getCharacterCount" 
      ) 
     this.allCharacter = countCharacter;
     
  },
};
</script>

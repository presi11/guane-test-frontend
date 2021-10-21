<template>
  <div class="home">
    <GridCard :characters="characters" />
  </div>
</template>

<script>
// @ is an alias to /src
import GridCard from "@/components/GridCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    GridCard,
  },

  data: function () {
    return { characters: [],
     };
  },
  async created() {
    axios.get("https://rickandmortyapi.com/api/character").then((result) => {
      this.characters = result.data.results;
      console.log(result.data);
      console.log(this.characters);
    });
  },
  /*   methods: {
    async allCharacters() {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((result) => {
          this.characters = result.data.results;
          console.log(result.data);
        });
    },
  }, */
};
</script>

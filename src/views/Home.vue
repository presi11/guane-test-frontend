<template>
  <div class="home">
   
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

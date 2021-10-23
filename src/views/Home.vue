<template>
  <div class="home">
    <h3>Filter by status</h3>
  
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
  background: #081119;
  background-image: url("~@/assets/background4.jpg");
  
}.content-characters:hover {
    background: #1b1b1b;
}
h1 {
  color: #00ff97;
}
/*
.content-characters{
  background: #002128;
  padding: 1rem;
  border-radius: 1rem;
}

.character {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-character{
  display: table-column;
  justify-content: center;
  margin: 0 auto;
}



h2 {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
  background: #00ff97;
  border-radius: 0.8rem;
  margin: 1rem;
}
h4 {
  margin: 1rem;
  color: #ffffff;
  background: #8b8b8b;
  border-radius: 0.4rem;
  font-weight: inherit;
  padding: 0.2rem;
}
input{
  text-align: center;
  background: #002128;
  outline: none;
  border: 0;
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
}
@media screen and (max-width: 918px) {
.content {
  grid-template-columns: 1fr 1fr;
}
.character {
  display: flex;
  align-items: center;
}
h2{
  font-size: 1rem;
}
}


@media screen and (max-width: 540px) {
.content {
  width: 90%;
  grid-template-columns: 1fr;
}
.character {
  display: flex;
  align-items: center;
}
 */
/* } */

</style>

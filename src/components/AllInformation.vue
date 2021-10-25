<template>
  <div class="all-information">
    <h1>Information about {{ name }}</h1>

    <div class="all-information__card">
      <img class="all-information__image" :src="image" alt="character image">
      <div class="all-information__information">
        <h2>{{name}}</h2>
        <h2>{{status}}</h2>
        <h2>{{species}}</h2>
        <h2>{{gender}}</h2>
      </div>
      <div class="all-information__origen">
        <h2>{{origin}}</h2>
  
      </div>
      <div class="all-information__location"><h2>{{location}}</h2></div>
            
    </div>
  </div>
</template>

<script>
export default {
  name: "AllInformation",
  data: function () {
    return {
      name: null,
      status: null,
      species: null,
      gender: null,
      origin: null,
      location: null,
      image: null,
    };
  },
  async created() {
    let infoCharacter = await this.$store.dispatch(
      "getCharacter",
      this.$route.params.id
    );
    this.name = infoCharacter.name;
    this.status = infoCharacter.status;
    this.species = infoCharacter.species;
    this.gender = infoCharacter.gender;
    this.origin = infoCharacter.origin.name;
    this.location = infoCharacter.location.name;
    this.image = infoCharacter.image;
  },
};
</script>

<style lang="scss" scoped>
.all-information {
  display: grid;
  /*   grid-template-columns: auto ;
  grid-template-rows: auto auto; */
  align-content: center;
  justify-content: center;

  &__card {
    color: white;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    background-color: rgb(33, 37, 41);
    width: 57rem;
    height: 24rem;
  }
  &__image{
    
  }
  &__information{
    text-align: left;
    
  }
}
</style>
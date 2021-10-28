<template>
  <div class="all-information">
    <h1>Information about {{ name }}</h1>

    <div class="all-information__card">
      <img class="all-information__image" :src="image" alt="character image" />
      <div class="all-information__information">
        <h2 class="all-information__feature">Name</h2>
        <h3>{{ name }}</h3>
        <h2 class="all-information__feature">Status</h2>
        <div v-if="status == 'Alive'">
          <h3>❤️ {{ status }}</h3>
        </div>
        <div v-if="status == 'Dead'">
          <h3>☠️ {{ status }}</h3>
        </div>
        <div v-if="status == 'unknown'">
          <h3>❓ {{ status }}</h3>
        </div>
        <h2 class="all-information__feature">Specie</h2>
        <div v-if="species == 'Human'">
          <h3>🧔🏻 {{ species }}</h3>
        </div>
        <div v-else>
          <h3>👽 {{ species }}</h3>
        </div>
        <h2 class="all-information__feature">Gender</h2>

        <h3>⚧️{{ gender }}</h3>
      </div>
      <div class="all-information__origen">
        <h2 class="all-information__feature">Origin</h2>
        <h2>🪐{{ origin }}</h2>
      </div>
      <div class="all-information__location">
        <h2 class="all-information__feature">Location</h2>
        <h2>🗺️{{ location }}</h2>
      </div>
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
  align-content: center;
  justify-content: center;

  &__card {
    color: white;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    background-color: rgb(33, 37, 41);
    width: 59rem;
    height: 31rem;
    border-radius: 10px;
  }

  &__image {
    border-radius: 10px;
    margin: 1rem;

  }
  &__information {
    text-align: left;
  }

  &__feature {
    font-weight: bold;
  }
}
</style>
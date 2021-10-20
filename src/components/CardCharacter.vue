<template>
  <div>
    <h1>Hola</h1>
    <h2>{{ name }}</h2>
    <div>
      <b-card
        bg-variant="dark"
        text-variant="white"
        :title="name"
        :img-src="image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
        href="/"
      >
        <b-card-sub-title class="mb-2">Specie {{ species }} - gender {{gender}}</b-card-sub-title>
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="/" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "CardCharacter",
  data: function () {
    return {
      name: null,
      image: null,
      status: null,
      species: null,
      gender: null,
    };
  },
  created() {
    axios.get("https://rickandmortyapi.com/api/character/1").then((result) => {
      this.name = result.data.name;
      this.image = result.data.image;
      this.species = result.data.species;
      this.gender = result.data.gender;
      console.log(result.data);
    });
  },
};
</script> 
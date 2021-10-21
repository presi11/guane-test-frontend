<template>
  <div>
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
      >
       
        <b-card-sub-title class="mb-2">Specie {{ species }} - Gender {{gender}}</b-card-sub-title>

        <b-button href="/information" variant="primary">More information</b-button>
      </b-card>

    </div>
  </div>
</template>


<script>

export default {
  name: "CardCharacter",
  props:{
      name: null,
      image: null,
      species: null,
      gender: null,
  },

};
</script> 
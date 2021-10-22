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
        style="max-width: 18rem"
        class="mb-4"
      >
       
        <b-card-sub-title class="mb-2">Specie {{ species }} - Gender {{gender}}</b-card-sub-title>
        <router-link :to="{name:'Information', params:{id:idCharacter}}">

        <b-button  v-b-popover.hover.top="'I have more information about you favorite character!!!'"  variant="primary">More information</b-button>
        </router-link>
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
      idCharacter:null
  },

};
</script> 
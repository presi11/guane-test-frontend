<template>
  <div>
    <h1>Information about {{ name }}</h1>
    <b-container class="bv-example-row mb-3">
      <b-row cols="1">
        <b-col>{{name}}</b-col>
      </b-row>
      <b-row cols="2">
        <b-col><img :src="image" alt=""></b-col>
        <b-col>{{status}}</b-col>
        <b-col>{{species}}</b-col>
        <b-col>{{gender}}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AllInformation",
  data: function () {
    return {
      name:null,
       status: null,
       species:null,
       gender:null,
       origin:null,
       location:null,
       image:null
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
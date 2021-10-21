<template>
<div class="container">
  <div class="row">
    <div class="col-sm-3" v-for="(characters, index) in characters" :key="index">
    <CardCharacter :name=characters.name :image=characters.image :species=characters.species :gender=characters.gender >
      </CardCharacter>
    </div>
  </div>
</div>

 
  
          

</template>

<script>
import CardCharacter from "@/components/CardCharacter";

export default {
  name: "GridCard",
  props: {
    characters: [],
  },

  components: {
    CardCharacter,
  },
};
</script>
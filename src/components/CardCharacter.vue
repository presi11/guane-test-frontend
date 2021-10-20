<template>
  <div>
    <h1>Hola</h1>
    <h2>{{name}}</h2>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "CardCharacter",
  data: function () {
    return {
      name: null,
    };
  },
  created() {
    axios.get("https://rickandmortyapi.com/api/character/1").then((result) => {
      this.name = result.data.name;
      console.log(result.data);
    });
  },
};
</script> 
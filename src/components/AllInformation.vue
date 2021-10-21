<template>
  <div>
    <b-container class="bv-example-row mb-3">
      <b-row cols="1">
        <b-col>{{name}}</b-col>
      </b-row>
            <b-row cols="2">
        <b-col>Column</b-col>
        <b-col>Column</b-col>
        <b-col>Column</b-col>
        <b-col>Column</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AllInformation",
  props:{
      name: null,
      image: null,
      species: null,
      gender: null,
  }
};
</script>
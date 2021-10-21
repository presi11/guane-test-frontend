<template>
  <div>
    <AllInformation> </AllInformation>
  </div>
</template>

<script>
import AllInformation from "@/components/AllInformation.vue";

export default {
  name: "Information",
  components: {
    AllInformation,
  },
  props: {
    name: null,
    image: null,
    species: null,
    gender: null,
  },
  
};
</script>
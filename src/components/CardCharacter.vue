<template>
  <div>
    <div class="character">
      <!--       <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 540px"
        bg-variant="dark"
        text-variant="white"
     
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="image" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="name">
              <span>{{ gender }}</span>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card> -->
      <b-card
        bg-variant="dark"
        text-variant="white"
        :title="name"
        :img-src="image"
        img-alt="Image"
        img-left
        tag="article"
        style="max-width: 540px"
        class="mb-4"
      >
        <div class="info-character">
          <h4>{{ gender }}</h4>
          <h4>{{ species }}</h4>
        </div>
        <router-link :to="{ name: 'Information', params: { id: idCharacter } }">
          <b-button
            v-b-popover.hover.top="
              'I have more information about you favorite character!!!'
            "
            variant="primary"
            >More information</b-button
          >
        </router-link>
      </b-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "CardCharacter",
  props: {
    name: null,
    image: null,
    species: null,
    gender: null,
    idCharacter: null,
  },
};
</script> 

<style lang="scss">
/* .info-character{
  display: table-column;
  justify-content: center;
  margin: 0 auto;
} */
#title {
  color: #00ff97;
}

.character {


  transition: transform 200ms ease-in-out;
 
  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
  }

}
</style>
<template>
  <div>
    <div class="character">
      <router-link
        class="router"
        :to="{ name: 'Information', params: { id: idCharacter } }"
      >
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
            <div v-if="status == 'Alive'">
              <h4>❤️{{ status }}</h4>
            </div>
            <div v-if="status == 'Dead'">
              <h4>☠️{{ status }}</h4>
            </div>
            <div v-if="status == 'unknown'">
              <h4>❓{{ status }}</h4>
            </div>
            <h4>{{ species }}</h4>
          </div>
          <router-link
            :to="{ name: 'Information', params: { id: idCharacter } }"
          >
            <b-button
              class="button-more"
              v-b-popover.hover.top="
                'I have more information about your favorite character!!!'
              "
              variant="primary"
              >More information</b-button
            >
          </router-link>
        </b-card>
      </router-link>
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
    status: null,
    idCharacter: null,
  },
};
</script> 

<style lang="scss">
#title {
  color: #00ff97;
}

.card-img-left{
  background-size: 20px;
  color: #00ff97;
}

.router {
  color: white;
  text-decoration: none;
}
.button-more {
  margin: 3rem;
  justify-content: flex-end;
  align-content: flex-end;
}
.character {
  transition: transform 200ms ease-in-out;
  display: flex;
  text-align: left;

  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
  }
}
</style>
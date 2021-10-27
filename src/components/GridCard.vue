<template>
  <div class="container">
    <div class="grid-top">
      <FilterByStatus @state="filterStatus" />
        <div class="search">
    <input
      v-model="search"
      type="search"
      class="form-control"
      placeholder="Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <button class="btn btn-success" type="button" v-on:click="searchData">
      Search
    </button>
  </div>

    </div>
    <div class="grid-card" id="itemCard">
      <div v-for="(characters, index) in characters" :key="index">
        <CardCharacter
          :name="characters.name"
          :image="characters.image"
          :species="characters.species"
          :status="characters.status"
          :idCharacter="characters.id"
        >
        </CardCharacter>
      </div>
    </div>
    <div class="pagination">
      <b-pagination
        :total-rows="rows"
        v-model="currentPage"
        :per-page="perPage"
        class="my-0"
        align="center"
        @change="changePage"
      />
    </div>
  </div>
</template>

<script>
import CardCharacter from "@/components/CardCharacter";
import FilterByStatus from "@/components/FilterByStatus.vue";


export default {
  name: "GridCard",

  data: function () {
    return {
      characters: [],
      currentPage: 1,
      search: "",
      perPage: 10,
      rows: null,
      currentStatus: null,
    };
  },

  async created() {
    this.changePage(1);
  },

  methods: {
    async changePage(currentPagePagination) {
      let params = {
        currentPagePagination: currentPagePagination,
        currentStatus: this.currentStatus,
        name: this.search,
      };
      await this.$store.dispatch("getCharacterPage", params);
      console.log(this.$store.state);
      this.characters = this.$store.state.character.characters;
      this.rows = this.$store.state.character.count;
    },

    searchData() {
      this.currentPage = 1;
      this.changePage(1);
    },

    async filterStatus(state) {
      this.currentStatus = state.state;
      await this.changePage(1);
      this.currentPage = 1;
    },
  },
  components: {
    CardCharacter,
    FilterByStatus,

  },
};
</script>

<style >
input {
  width: 10%;
}

.grid-card {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-template-rows: auto;
  justify-items: center;
}
.pagination {
  margin: 2rem;
  justify-content: center;
}

.grid-top {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
}
.search {
  margin: 2rem;
  align-items: flex-end;
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
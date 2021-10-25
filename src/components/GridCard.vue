<template>
  <div class="container">
    <div class="grid-top">
    <FilterByStatus @state="filterStatus" />

    <div class="search">
      <input
        v-model="search"
        v-on:keyup.enter="searchData"
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
      <div v-for="(itemsForList, index) in itemsForList" :key="index">
        <CardCharacter
          :name="itemsForList.name"
          :image="itemsForList.image"
          :species="itemsForList.species"
          :status="itemsForList.status"
          :idCharacter="itemsForList.id"
        >
        </CardCharacter>
      </div>
    </div>
    <div class="pagination">
      <b-pagination
        :total-rows="rows"
        :per-page="perPage"
        v-model="currentPage"
        class="my-0"
        align="center"
        v-on:input="hi"
      />
    </div>
 
  </div>
</template>

<script>
import CardCharacter from "@/components/CardCharacter";
import FilterByStatus from "@/components/FilterByStatus.vue";
export default {
  name: "GridCard",
  props: {
    allCharacter: null,
  },
  data: function () {
    return {
      characters: [],
      paginatedItems: this.characters,
      currentPage: 1,
      perPage: 10,
      num: null,
      search: "",
      rows: null,
    };
  },

  async created() {
    let infoCharacterpage = await this.$store.dispatch("getCharacterPage", 1);
    this.rows = this.allCharacter;
    this.characters = infoCharacterpage;
  },
  computed: {
    itemsForList: function () {
      return this.characters.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },

  watch: {
    async currentPage(newValue) {
      if (newValue % 2 == 1) {
        this.num = (newValue + 1) / 2;

        let infoCharacterpage = await this.$store.dispatch(
          "getCharacterPage",
          this.num
        );

        this.characters = this.characters.concat(infoCharacterpage);
      }
    },
  },

  methods: {
    hi() {
      console.log("hi");
    },
    async fetch() {
      const params = {
        page: this.currentPage,
        name: this.search,
      };

      let characterSearch = await this.$store.dispatch(
        "getCharacterSearch",
        params.name
      );
      console.log(characterSearch);
      this.characters = characterSearch.results;
    },
    searchData() {
      this.currentPage = 1;
      this.fetch();
      if (this.search == "") {
        this.rows = this.allCharacter;
      } else {
        console.log(this.characters.length);
        this.rows = this.characters.length;
      }
    },

    async filterStatus(state) {
      console.log(state.state);
      let characterByStatus = await this.$store.dispatch(
        "getCharacterByStatus",
        state.state
      );
      console.log(characterByStatus);
      this.characters = characterByStatus.results;
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

.grid-top{
  display: grid;
  grid-template-columns:auto auto ;
  grid-template-rows: auto;
}
.search {
  margin: 2rem;
  align-items: flex-end;
  display: grid;
  grid-template-columns: 80% 20% ;
}
</style>
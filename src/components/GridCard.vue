<template>
  <div class="container">
    <FilterByStatus @state="filterStatus" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-pagination
            :total-rows="rows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
            align="center"
            v-on:input="hi"
          />
          ></b-col
        >
        <b-col
          ><div class="input-group mb-5">
            <div class="col-xs-3">
              <input
                v-model="search"
                v-on:keyup.enter="searchData"
                type="search"
                class="form-control"
                placeholder="Name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </div>
            <div class="input-group-append">
              <button
                class="btn btn-outline-success"
                type="button"
                v-on:click="searchData"
              >
                Search
              </button>
            </div>
          </div></b-col
        >
      </b-row>

      <b-row> </b-row>
    </b-container>
    <div class="row" id="itemCard">
      <div
        class="col-sm-6"
        v-for="(itemsForList, index) in itemsForList"
        :key="index"
      >
        <CardCharacter
          :name="itemsForList.name"
          :image="itemsForList.image"
          :species="itemsForList.species"
          :gender="itemsForList.gender"
          :idCharacter="itemsForList.id"
        >
        </CardCharacter>
      </div>
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
</style>
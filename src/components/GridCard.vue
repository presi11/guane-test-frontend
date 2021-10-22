<template>
  <div class="container">
    <div class="field has-addons is-pulled-right">
      <div class="control">
        <input
          v-model="search"
          type="text"
          class="input is-rounded"
          v-on:keyup.enter="searchData"
        />
      </div>
      <div class="control">
        <button class="button is-success is-rounded" v-on:click="searchData">
          Buscar
        </button>
      </div>
    </div>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="rows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
          align="center"
          v-on:input="hi"
        />
      </b-col>
    </b-row>
    <div class="row" id="itemCard">
      <div
        class="col-sm-3"
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
      }else{
        console.log(this.characters.length);
        this.rows = this.characters.length
      }
    },
  },
  components: {
    CardCharacter,
  },
};
</script>


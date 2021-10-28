<template>
  <div class="container">
    <div class="grid-top">
      <FilterByStatus @state="filterStatus" />
      <div class="search-box">
        <button class="btn-search" v-on:click="searchData"><i class="fa fa-search"></i></button>
        <input
        v-model="search"
          type="text"
          class="input-search"
          placeholder="Search a Character..."
           v-on:keyup.enter="searchData"
        />
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
        @change="getCharacterForPage"
        style="color: #ffffff"
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
    this.getCharacterForPage(1);
  },

  methods: {
    async getCharacterForPage(currentPagePagination) {
      let params = {
        currentPagePagination: currentPagePagination,
        currentStatus: this.currentStatus,
        name: this.search,
      };
      await this.$store.dispatch("getCharacterPage", params);
 
      this.characters = this.$store.state.character.characters;
      this.rows = this.$store.state.character.count;
    },

    searchData() {
      this.currentPage = 1;
      this.getCharacterForPage(1);
    },

    async filterStatus(state) {
      this.currentStatus = state.state;
      await this.getCharacterForPage(1);
      this.currentPage = 1;
    },
  },
  components: {
    CardCharacter,
    FilterByStatus,
  },
};
</script>

<style lang="scss">
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
.page-item.active .page-link {  
    background-color: #ff9800 !important;  
    border-color: #ff9800 !important;  
  
}



.grid-top {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-items:center;
}

.search-box{
  width: fit-content;
  height: fit-content;
  position: relative;
}
.input-search{
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all .5s ease-in-out;
  background-color: #ff9800;
  padding-right: 40px;
  color:#fff;
}
.input-search::placeholder{
  color:rgba(255,255,255,.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search{
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color:#ffffff ;
  background-color:transparent;
  pointer-events: painted;  
}
.btn-search:focus ~ .input-search{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
</style>
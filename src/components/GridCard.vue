<template>
  <div class="container">
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="rows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
          align="center"
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
    };
  },

  async created() {
    let infoCharacterpage = await this.$store.dispatch("getCharacterPage", 1);

    this.characters = infoCharacterpage;
  },
  computed: {
    itemsForList: function () {
      return this.characters.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    rows() {
      return this.allCharacter;
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

  components: {
    CardCharacter,
  },
};
</script>


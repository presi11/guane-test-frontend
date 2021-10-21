<template>
  <div class="container">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemCard"
      align="center"
    ></b-pagination>
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
    characters: [],
  },
  data: function () {
    return {
      currentPage: 1,
      perPage: 10,
      rows: this.characters.length,
    };
  },
  computed: {
    itemsForList: function() {
      return this.characters.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },

  components: {
    CardCharacter,
  },
};
</script>
<template>

  <div class="filter">
    <div class="item" @click="filter('')">All</div>
    <div class="item" @click="filter('Alive')">Alive</div>
    <div class="item" @click="filter('Dead')">Dead</div>
    <div class="item" @click="filter('unknown')">Unknown</div>
  </div>
</template>

<script>
export default {
  name: "FilterByStatus",
  methods: {
    filter(state) {
      this.$emit("state", { state });
    },
  },
};
</script>

<style lang="scss">

.filter {
  width: 400px;
  height: 50px;
  margin: 4px;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  border-radius: 10px;
  overflow: hidden;
  .item {
    padding: 1rem 0.5rem;
    background-color: rgb(42, 45, 48);
    color:#ff9800 ;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(#ff9800);
    }
  }

}
</style>
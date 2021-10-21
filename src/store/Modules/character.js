import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
    count: null,
  },
  mutations: {
    setCharacter(state, characters) {
      state.characters = characters;
    },
/*     countCharacter(state, count) {
      state.count = count;
    }, */
  },
  actions: {
    async getCharacter({ commit }) {
        console.log('hiiiiiiiiiiii');
      let response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

     
      if (response.status == 200) {
        commit("setCharacter", response.data.results);
        commit("countCharacter", response.data.info.count);
      }
    },
  },
  modules: {},
});

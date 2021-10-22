import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    character:null,
    characters: null,
    count: null,
  },
  mutations: {
    setCharacter(state, character) {
      state.character = character;
    },
    setCharacterPage(state, characters) {
      state.characters = characters;
      console.log(state.characters);
    },
    countCharacter(state, count) {
      state.count = count;
    },
  },
  actions: {
    async getCharacterCount({ commit }) {
      let response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      if (response.status == 200) {
        commit("countCharacter", response.data.info.count);
      }
      return response.data.info.count;
    },

    async getCharacterPage({ commit }, page) {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );

      if (response.status == 200) {
        commit("setCharacterPage", response.data.results);
      }
      return response.data.results;
    },
    async getCharacter({ commit }, idCharacter) {
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character/${idCharacter}`
      );

      if (response.status == 200) {
        commit("setCharacter", response.data);
      }
      return response.data;
    },

  },
  modules: {},
});

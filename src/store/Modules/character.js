
import axios from "axios";



const character = {
  state: {
    character: null,
    characters: null,
    count: null,
  },
  mutations: {
    setCharacter(state, character) {
      state.character = character;
    },
    setCharacterPage(state, characters) {
      state.characters = characters;
    },
    countCharacter(state, count) {
      state.count = count;
    },
  },
  actions: {
    async getCharacterPage({ commit }, payLoad) {
      let page = Math.floor((payLoad.currentPagePagination + 1) / 2);
      let params = {
        page: page,
        status: payLoad.currentStatus,
        name: payLoad.name,
      };
      let response = await axios.get(
        `https://rickandmortyapi.com/api/character`,
        { params }
      );

      if (response.status == 200) {
        if (payLoad.currentPagePagination % 2 == 1) {
          commit("setCharacterPage", response.data.results.slice(0, 10));
          commit("countCharacter", response.data.info.count);
        } else {
          commit("setCharacterPage", response.data.results.slice(10, 20));
          commit("countCharacter", response.data.info.count);
        }
      }
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
};

export default character;

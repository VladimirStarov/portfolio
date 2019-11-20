import { generateStdError } from "../../helpers/errorHandler";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async addSkill (context, payload) {
      try {
        const { data } = await this.$axios.post('/skills', payload);
        context.commit('categories/ADD_SKILL', data, { root: true });
      } catch (error) {
      }
    },
    async deleteSkill (context, payload) {
      try {
        await this.$axios.delete(`/skills/${ payload.id }`);
        context.commit('categories/DELETE_SKILL', payload, { root: true });
      } catch (error) {
      }
    },
    async editSkill (context, payload) {
      try {
        const { data } = await this.$axios.post(`/skills/${ payload.id }`, payload);
        context.commit('categories/EDIT_SKILL', data.skill, { root: true });
      } catch (error) {
      }
    }
  },
  getters: {}
};
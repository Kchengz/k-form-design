export default {
  state: {
    formJson: {}
  },
  mutations: {
    SET_FORM_JSON(state, formJson) {
      state.formJson = formJson;
    }
  },
  actions: {
    UpdateFormJson({ commit }, formJson) {
      commit("SET_FORM_JSON", formJson);
    }
  }
};

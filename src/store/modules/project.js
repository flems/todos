import { saveToLocalStorage } from "@/utils/saveToLocalStorage.js";

export default {
  state: {
    list: JSON.parse(localStorage.getItem("projects") || "[]")
  },
  mutations: {
    addProject: function(state, data) {
      let id;
      if (state.list.length > 0) {
        id = state.list[state.list.length - 1].id + 1;
      } else {
        id = 1;
      }
      const newProject = {
        id: id + 1,
        name: data.get("project")
      };
      state.list.push(newProject);
      saveToLocalStorage("projects", JSON.stringify(state.list));
    }
  },
  actions: {
    addProject: function({ commit }, e) {
      const form = e.target;
      const formData = new FormData(form);
      const projectName = formData.get("project");
      if (projectName !== "") {
        //отправка на сервер
        commit("addProject", formData);
        form.reset();
      }
    }
  }
};

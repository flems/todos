export default {
  state: {
    list: [
      {
        id: 1,
        name: "Проект 1"
      },
      {
        id: 2,
        name: "Проект 2"
      }
    ]
  },
  mutations: {
    addProject: function(state, data) {
      const lastId = state.list[state.list.length - 1].id;
      const newProject = {
        id: lastId + 1,
        name: data.get("project")
      };
      state.list.push(newProject);
    }
  },
  actions: {
    addProject: function({ commit }, e) {
      const form = e.target;
      const formData = new FormData(form);
      const projectName = formData.get("project");
      if (projectName !== "") {
        //запись в cookie или отправка на сервер
        commit("addProject", formData);
        form.reset();
      }
    }
  }
};

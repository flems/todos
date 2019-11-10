export default {
  state: {
    list: [
      {
        id: 1,
        name: "Задача 1",
        completed: false,
        parent: 1
      },
      {
        id: 2,
        name: "Задача 2",
        completed: true,
        parent: 1
      },
      {
        id: 3,
        name: "Задача 3",
        completed: false,
        parent: 1
      }
    ]
  },
  mutations: {
    setTaskStatus: function(state, id) {
      const index = state.list.findIndex(task => task.id === id);
      state.list[index]["completed"] = !state.list[index]["completed"];
    },
    deleteTask: function(state, id) {
      const index = state.list.findIndex(task => task.id === id);
      state.list.splice(index, 1);
    }
  },
  actions: {
    changeTaskStatus: function({ commit }, id) {
      //запись в cookie или отправка на сервер
      commit("setTaskStatus", id);
    },
    deleteTask: function({ commit }, id) {
      //запись в cookie или отправка на сервер
      commit("deleteTask", id);
    }
  },
  modules: {}
};

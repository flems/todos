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
    },
    addTask: function(state, data) {
      let id;
      if (state.list.length > 0) {
        id = state.list[state.list.length - 1].id + 1;
      } else {
        id = 1;
      }
      const newTask = {
        id: id,
        completed: false,
        parent: data.get("parent"),
        name: data.get("task")
      };
      state.list.push(newTask);
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
    },
    addTask: function({ commit }, e) {
      const form = e.target;
      const formData = new FormData(form);
      const taskName = formData.get("task");
      if (taskName !== "") {
        //запись в cookie или отправка на сервер
        commit("addTask", formData);
        form.reset();
      }
    }
  }
};

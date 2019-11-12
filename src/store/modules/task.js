import { saveToLocalStorage } from "@/utils/saveToLocalStorage.js";

export default {
  state: {
    list: JSON.parse(localStorage.getItem("tasks") || "[]")
  },
  mutations: {
    setTaskStatus: function(state, id) {
      const index = state.list.findIndex(task => task.id === id);
      state.list[index]["completed"] = !state.list[index]["completed"];
      saveToLocalStorage("tasks", JSON.stringify(state.list));
    },
    deleteTask: function(state, id) {
      const index = state.list.findIndex(task => task.id === id);
      state.list.splice(index, 1);
      saveToLocalStorage("tasks", JSON.stringify(state.list));
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
      saveToLocalStorage("tasks", JSON.stringify(state.list));
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

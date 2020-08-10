import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    projects: [],
    tasks: [],
  },
  mutations: {
    addProject(state, project) {
      state.projects.push({
        id: project.id,
        title: project.title,
        completed: false,
        description: project.description,
        manager: project.manager,
      })
    },
    removeProject(state, id) {
      const index = state.projects.findIndex(item => item.id == id)
      state.projects.splice(index, 1)
    },
    addTask(state, task) {
      state.tasks.push({
        id: task.id,
        completed: false,
        description: task.description,
        start: task.start,
      })
    },
    removeTask(state, id) {
      const index = state.tasks.findIndex(item => item.id == id)
      state.tasks.splice(index, 1)
    },
  },
})
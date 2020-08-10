<template>
  <div class="container">
    <form @submit.prevent class="form-group col-sm-12 col-md-6 mx-auto">
      <label><b>Add new project</b></label>
      <input type="text" class="form-control round mb-2" placeholder="Project title" v-model="newProjectTitle" required>
      <textarea type="text" class="form-control round mb-2" placeholder="Project description" v-model="newProjectDescription" required></textarea>
      <input type="text" class="form-control round mb-2" placeholder="Project manager" v-model="newProjectManager" required>
      <button type="submit" class="btn round-btn btn-primary" :disabled="isDisabled()" v-on:click="addProject()">Add project</button>
    </form>
    <ul class="list-group">
      <li v-for="(project, index) in $store.state.projects" :key="project.id" class="list-group-item d-flex flex-column justify-content-between align-items-center col-sm-12 col-md-8 mx-auto mb-5">
        <div class="mb-2 d-flex flex-column w-100 justify-content-between align-items-start">
          <div class="title">
            <editable v-model="project.title"></editable>
          </div>
          <editable v-model="project.description"></editable>
          <div class="d-md-flex justify-content-between w-100 align-items-center">
            <editable label="Project manager:" v-model="project.manager"></editable>
            <div class="form-check border my-2" v-bind:class="{ 'bg-done': project.completed }">
              <div class="status d-flex align-items-center">
                <input class="mr-2" type="checkbox" v-model="project.completed">
                <p v-if="project.completed" class="mb-0">Completed</p>
                <p v-else class="mb-0">In progress</p>
              </div>
            </div>
          </div>
        </div>
          <button class="close position-absolute" @click="removeProject(index)" aria-label="Close">
            &times
          </button>
          <button type="button" data-toggle="modal" data-target="#taskModal" class="btn btn-primary round-btn position-absolute">Tasks</button>
      </li>
    </ul>
    <tasks/>
  </div>
</template>

<script>
import tasks from './Tasks'
import editable from './Editable'
export default {
  components: {
    tasks: tasks,
    editable: editable
  },
  name: 'Projects',
  data () {
    return {
      newProjectTitle: '',
      newProjectDescription: '',
      newProjectManager: '',
      idForProject: 1,
    }
  },
  methods: {
    isDisabled() {
      return this.newProjectManager.trim().length == 0 ||
             this.newProjectDescription.trim().length == 0 ||
             this.newProjectTitle.trim().length == 0;
    },
    addProject() {
      this.$store.commit('addProject', {
        id: this.idForProject,
        title: this.newProjectTitle,
        description: this.newProjectDescription,
        manager: this.newProjectManager,
      })
      this.idForProject++
      this.newProjectTitle = ''
      this.newProjectDescription = ''
      this.newProjectManager = ''
    },
    removeProject(id) {
      this.$store.commit('removeProject', id)
    },
  }
}
</script>

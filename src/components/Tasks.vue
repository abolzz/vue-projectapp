<template>
  <div id="taskModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <label class="modal-title"><b>Tasks</b></label>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent class="form-group">
            <textarea type="text" class="form-control round mb-2" placeholder="Task description" v-model="newTaskDescription" required></textarea>
            <input type="date" class="form-control round mb-2" placeholder="Task start" v-model="newTaskStart" required>
            <button class="btn round-btn btn-primary" type="submit" :disabled="isDisabled()" v-on:click="addTask()">Add task</button>
          </form>
          <ul class="list-group">
            <li v-for="(task, index) in $store.state.tasks" :key="task.id" class="list-group-item d-flex flex-column justify-content-between align-items-start mb-2">
              <editable v-model="task.description"></editable>
              <div class="d-flex justify-content-between w-100 align-items-center">
                <editable label="Start date:" v-model="task.start"></editable>
                <div class="form-check border" v-bind:class="{ 'bg-done': task.completed }">
                  <div class="status d-flex align-items-center">
                    <input type="checkbox" v-model="task.completed" class="mr-2">
                    <p v-if="task.completed" class="mb-0">Completed</p>
                    <p v-if="!task.completed" class="mb-0">In progress</p>
                  </div>
                </div>
              </div>
              <button class="close position-absolute" @click="removeTask(index)" aria-label="Close">
                &times
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editable from './Editable'
export default {
  components: {
    editable: editable
  },
  name: 'tasks',
  data () {
    return {
      newTaskDescription: '',
      newTaskStart: '',
      idForTask: 1,
    }
  },
  directives: {
    // fixes focusing issue if double clicked on input focus event did not trigger
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    isDisabled() {
      return this.newTaskStart.trim().length == 0 ||
             this.newTaskDescription.trim().length == 0;
    },
    addTask() {
      this.$store.commit('addTask', {
        id: this.idForTask,
        description: this.newTaskDescription,
        start: this.newTaskStart,
      })
      this.idForTask++
      this.newTaskDescription = ''
      this.newTaskStart = ''
    },
    removeTask(id) {
      this.$store.commit('removeTask', id)
    },
  }
}
</script>

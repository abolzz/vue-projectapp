<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Projects/>
  </div>
</template>

<script>
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import Editable from './components/Editable'

export default {
  name: 'ProjectApp',
  components: {
    Projects,
    Tasks,
    Editable
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bg-done {background-color: rgba(151, 225, 172, .75)}
.title {
  font-size: 2rem;
  font-weight: bold;
}
.close {right: 2.5%;}
.form-check {padding: 8px;}
.status {padding: 0 15px 0 5px;}
.btn.round-btn {bottom: -20px;}
.modal{overflow: visible !important;}
.form-control.round,
.btn.round-btn,
.form-check {
  border-radius: 25px;
}
</style>

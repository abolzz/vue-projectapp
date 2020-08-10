<template>
  <div class="d-flex align-items-center">
    <label class="mb-0 mt-3" v-bind:class="{ 'mr-2': label }"><b>{{label}}</b></label>
    <p class="mb-0 mt-3" @dblclick="editing=true" v-if="!editing">{{value}}</p>
      <input v-else
             :value="value"
             @input="$emit('input', $event.target.value)"
             @keydown.enter="editing=false"
             @blur="editing=false"
             type="text"
             v-focus>
  </div>
</template>

<script> 
export default {
  name: 'editable',
  props:["label", "value"],
  directives: {
    // fixes focusing issue if double clicked on input focus event did not trigger
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data(){
    return {
      editing: false,
    }
  }
}
</script>
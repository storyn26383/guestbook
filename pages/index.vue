<template lang="pug">
  v-layout(justify-center)
    v-flex(md8, sm10, xs12)
      v-card.mt-2.mb-4
        v-card-text.pa-0
          v-text-field(
            label="What needs to be done?",
            single-line,
            full-width,
            hide-details
          )
      v-card
        v-card-text.pa-0
          v-list.pa-0
            v-list-tile(avatar, :key="todo.id", v-for="todo in todos")
              v-list-tile-action
                v-checkbox(v-model="todo.completed")
              v-list-tile-content
                v-list-tile-title {{ todo.title }}
</template>

<script>
  export default {
    middleware: ['auth'],
    data () {
      return {
        todos: [{
          id: 1,
          title: 'Hello World',
          completed: false
        }, {
          id: 2,
          title: 'Hello World',
          completed: false
        }, {
          id: 3,
          title: 'Hello World',
          completed: true
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

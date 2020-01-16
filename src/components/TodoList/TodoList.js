import BaseInputText from '../BaseInputText/BaseInputText.vue'
import TodoListItem from '../TodoListItem/TodoListItem.vue'
import axios from 'axios';

let nextTodoId = 1

export default {
  components: {
    BaseInputText, TodoListItem
  },
  data () {
    return {
      newTodoText: '',
      todos: axios.get('https://jsonplaceholder.typicode.com/todos').then(response => response.data)
    }
  },
  methods: {
    addTodo () {
      const trimmedText = this.newTodoText.trim()
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        })
        this.newTodoText = ''
      }
    },
    removeTodo (idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove
      })
    }
  }
}

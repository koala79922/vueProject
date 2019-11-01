<template>
  <div class="MemorizeVocabulary">
     <!-- header -->
    <header class="header">
      <h1>MemorizeVocabulary</h1>
    </header>
    <section class="main" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} 項目
      </span>
      <input class="toggle-all" id="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll(!allChecked)">
      <label for="toggle-all">全選</label>
    </section>
     <b-table striped hover :fields="fields" :items="todos">
       <template v-slot:cell(show_details)="row">
        <div>
          <input class="edit"
            v-show="editing"
            :value="row.item.text"
            @keyup.enter="doneEdit($event, row.item)"
            @keyup.esc="cancelEdit"
            @blur="doneEdit($event, row.item)">
          <b-button @click="editing = true" size="sm" v-show="!editing">修改</b-button>
          <b-button @click="removeTodo(row)" size="sm">刪除</b-button>
        </div>
      </template>
     </b-table>
     <section class="todoapp">
<!-- main section -->
    <label>新增單字:</label>
    <input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="請輸入單字"
      @keyup.enter="addTodo">
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <ul class="filters">
        <!--eslint-disable-next-line-->
        <li v-for="(val, key) in filters" :key='key'>
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  components: {
  },
  data () {
    return {
      editing: false,
      visibility: 'all',
      filters: filters,
      fields: [
        'text',
        { key: 'Done', label: '過關' },
        'show_details'
      ]
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  computed: {
    ...mapState([
      'todos'
    ]),
    ...mapGetters([
      'count'
    ]),
    todos () {
      return this.$store.state.todos
    },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    ...mapActions([
      'toggleAll',
      'clearCompleted',
      'editTodo',
      'toggleTodo',
      'removeTodo'
    ]),
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    },
    doneEdit (e, todo) {
      const value = e.target.value.trim()
      if (!value) {
        this.removeTodo(todo)
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

import cats from '../data/cat'
export default{
  todos: JSON.parse(window.localStorage.getItem('todos-vuejs') || '[]'),
  count: 0,
  history: [],
  cats
}

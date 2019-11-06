<template>
  <div class="row">
    <div class="col-sm-offset-4 col-sm-4">
      <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group" >
            <label class="control-label" for="username">name</label>
            <input id="username"
                   v-model.trim="username"
                   class="form-control" type="text" placeholder="username">
                   <!-- @input="$v.name.$touch()" -->
          </div>

          <div class="form-group" >
            <label class="control-label" for="mobileNumber">mobileNumber</label>
            <input id="mobileNumber"
                   v-model.trim="mobileNumber"

                   class="form-control" type="text" placeholder="mobileNumber">
                   <!-- @input="$v.mobileNumber.$touch()" -->
          </div>

        <button type="submit" class="btn btn-default">Submit</button>
        &nbsp;
        <router-link to="../" append class="btn btn-default">Reject</router-link>
      </form>
    </div>
  </div>
</template>

<script>
// import vh, { bookTitle, author, mode, completed } from '@/helpers/validators'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
      username: '',
      mobileNumber: ''
    }
  },
  validations: {
    // title: vh.vrules(bookTitle),
    // author: vh.vrules(author)
  },
  computed: {
    ...mapGetters('items', ['book'])
  },
  methods: {
    ...mapActions('items', ['create', 'modify']),
    ...mapMutations('notification', ['notify', 'setStatus']),
    validateBeforeSubmit () {
      this.submitForm()
    },
    async submitForm () {
      if (this.id) {
        try {
          await this.modify({ item: { ...this.$data }, id: this.id })
          this.$router.push('/books')
          this.notify({ msg: 'A book has been modified :)', type: 'info' })
        } catch (e) {
          this.notify({ msg: 'Something went wrong when modifying a book :(', type: 'danger' })
        }
      } else {
        try {
          await this.create({ ...this.$data })
          this.$router.push('/books')
          this.notify({ msg: 'New book has been added :)', type: 'info' })
        } catch (e) {
          this.notify({ msg: 'Something went wrong when adding new book :(', type: 'danger' })
        }
      }
    }
  },
  created () {
    // New book
    if (!this.id) return

    const book = this.book(this.id)
    // A book has not been selected for editing
    if (!book) {
      this.$router.push('/books')
      return
    }
    // Edit book
    this.username = book.username
    this.mobileNumber = book.mobileNumber
  },
  mounted () {
    this.setStatus(this.header)
  },
  beforeDestroy () {
    this.setStatus('')
  }
}
</script>

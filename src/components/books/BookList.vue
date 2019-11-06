<template>
  <div>
      <div class="table-responsive">
        <div class="input-group">
          <b-button variant="outline-primary" class="my-search">
            <router-link  to="new" append class="btn btn-default " title="addPrompt">
            <!-- <i class="glyphicon glyphicon-plus"></i> -->
            </router-link>
            add user
          </b-button>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="width: 10%"></th>
              <th style="width: 15%">username</th>
              <th style="width: 8%">mobileNumber</th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="book in books" :key="book._id">
                <td>
                  <div class="input-group-btn">

                    <b-button variant="outline-primary" >
                       <router-link :to="book._id" append class="btn btn-default" title="Edit Book">
                        <i class="glyphicon glyphicon-pencil"></i>
                        update
                      </router-link>
                    </b-button>

                    <b-button variant="outline-primary" >
                      <a @click="openConfirm(book)" class="btn btn-default" title="Remove Book">
                        <i class="glyphicon glyphicon-remove"></i>
                        delete
                      </a>
                    </b-button>
                  </div>
                </td>
                <td>{{ book.username }}</td>
                <td>{{ book.mobileNumber }}</td>
              </tr>
            </tbody>
        </table>
      </div>
      <modal ref="deleteConfirm" @close="closeConfirm">
      <div slot="header"><h4>remove user</h4></div>
        <div slot="body">
          Are you sure you want to remove <span class="badge">{{ itemTitle }}</span>?
        </div>
    </modal>
  </div>
</template>

<script>
// import ItemList from '../ItemList'
import Pager from './../Pager'
import Modal from './../Modal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {Pager, Modal},
  data: () => ({ itemId: '', itemTitle: '' }),
  props: ['uid', 'name'],
  computed: {
    ...mapGetters('items', ['books'])
  },
  methods: {
    ...mapActions('items', ['getItems', 'delete']),
    openConfirm ({ _id, username }) {
      this.itemId = _id
      this.itemTitle = username
      this.$refs.deleteConfirm.open()
    },
    async closeConfirm (result) {
      if (!result) return
      try {
        await this.delete(this.itemId)
        // this.notify({ msg: 'An item has been removed :)', type: 'info' })
      } catch (e) {
        // this.notify({ msg: 'Something went wrong when removing an item :(', type: 'danger' })
      }
    }
  },
  created () {
    this.getItems({ hobby: 'books', uid: this.uid })
  }
}
</script>

<style>
  /*
   * Search bar
   */
  .my-search {
    margin-bottom: 18px;
    margin-left: 60px;
    margin-top: 20px;
  }
</style>

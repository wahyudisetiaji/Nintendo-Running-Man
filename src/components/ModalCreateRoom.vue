<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Room</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" v-model="username" placeholder="Username">
            </div>
            <div class="form-group">
              <label>Room</label>
              <input type="text" v-model="roomName" class="form-control" placeholder="Room name">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="toCreate" data-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'modalcreateroom',
  data () {
    return {
      // username: '',
      // roomName: ''
    }
  },
  computed: {
    ...mapState([
      'username',
      'roomName',
      'rooms'
    ]),
    username: {
      get () {
        return this.$store.state.username
      },
      set (value) {
        this.$store.commit('setUsername', value)
      }
    },
    roomName: {
      get () {
        return this.$store.state.roomName
      },
      set (value) {
        this.$store.commit('setRoomname', value)
      }
    }
  },
  methods: {
    ...mapActions([
      'toCreate'
    ])
    // createRoom () {
    //   console.log('coba')
    // }
  }

}
</script>

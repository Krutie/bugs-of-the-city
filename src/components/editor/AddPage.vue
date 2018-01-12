<template>
  <div class="card">
    <div class="card-block">
    <strong> Add Page </strong>
    <input type="text" class="form-control" id="page" 
      @keydown.enter="savePage({name: pageName, layout: layout})" v-model="pageName"
      placeholder="page name">
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import * as lib from '@/store/lib'
export default {
  name: 'addpage',
  data () {
    return {
      pageName: '',
      layout: [
        {'x': 0, 'y': 0, 'w': 2, 'h': 2, 'i': lib.guid()},
        {'x': 2, 'y': 0, 'w': 2, 'h': 4, 'i': lib.guid()},
        {'x': 4, 'y': 0, 'w': 2, 'h': 5, 'i': lib.guid()},
        {'x': 6, 'y': 0, 'w': 2, 'h': 3, 'i': lib.guid()},
        {'x': 8, 'y': 0, 'w': 2, 'h': 3, 'i': lib.guid()}
      ]
    }
  },
  methods: {
    ...mapActions({
      savePage: 'savePage'
    })
  }
}
</script>
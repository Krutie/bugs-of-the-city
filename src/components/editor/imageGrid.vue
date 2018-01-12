<template>
  <div  :style="'background-image:url(' + item.location + '); height: 100%; background-size: contain; background-repeat: no-repeat; border: 2px solid #FCE4EC; border-radius: 5px; background-position: center; ' " >
    <div v-if="!preview" @click="editImage = !editImage" style="position: absolute; left: 4px; top: 2px;">
      <i v-if="!editImage" class="fa fa-pencil" aria-hidden="true"></i>
      <i v-else="!editImage" class="fa fa-times" aria-hidden="true"></i>
    </div>
    <input v-if="editImage" type="text" v-model="item.location" @blur="dummySave" style="padding-left: 20px; width: 100%;">
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['preview', 'contenteditable', 'item', 'itemIndex'],
  data () {
    return {
      editImage: false
    }
  },
  methods: {
    ...mapActions({
      saveItem: 'saveItem'
    }),
    dummySave (e) {
      this.item.location = e.target.value
      this.saveItem({ item: this.item, index: this.itemIndex })
    }
  }
}
</script>
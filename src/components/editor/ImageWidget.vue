<template>
  <div  :style="getStyle" >
    <div v-if="!preview" @click="editImage = !editImage" class="preview">
      <i v-if="!editImage" class="fa fa-pencil" aria-hidden="true"></i>
      <i v-else="!editImage" class="fa fa-times" aria-hidden="true"></i>
    </div>
    <input v-if="editImage" type="text" v-model="item.location" @blur="save" class="edit">
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
  computed: {
    getStyle () {
      return 'background-image:url(' + this.item.location + '); height: 100%; background-size: contain; background-repeat: no-repeat; border: 2px solid #FCE4EC; border-radius: 5px; background-position: center;'
    }
  },
  methods: {
    ...mapActions([
      'saveItem'
    ]),
    save (e) {
      this.item.location = e.target.value
      this.saveItem({ item: this.item, index: this.itemIndex })
    }
  }
}
</script>

<style scoped>
  .preview {
    position: absolute; 
    left: 4px; 
    top: 2px;
  }

  .edit {
    padding-left: 20px; 
    width: 100%;
  }

</style>
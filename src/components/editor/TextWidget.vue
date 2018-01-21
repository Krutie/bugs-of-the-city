<template>
  <div v-if="item.type == 'title'">
    <div style="position: absolute; top: 5px; right: 1%;">
      <span v-if="!preview" @click="hVisible = !hVisible" style="cursor: pointer;"> 
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i> 
      </span>
      <div class="btn-group btn-group-sm" v-if="!preview && hVisible" v-for="(heading, key) in item.headings" @click="changeToHeading({headingKey: key})" 
         title="Change Heading">
          <button type="button" class="btn btn-primary" style="cursor: pointer;"> {{ key }} </button>
      </div>
    </div>
    <div :id="item.i" :contenteditable="contenteditable" style="padding:6px 10px;" v-on:paste.prevent="pasteData" 
    v-model="item.title" @blur="save"
          :class="[{ 'heading1': item.headings.h1,
            'heading2': item.headings.h2, 
            'heading3': item.headings.h3, 
            }]" >
            {{ item.title }} 
      </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import map from 'lodash/map'
export default {
  props: ['preview', 'contenteditable', 'item', 'itemIndex'],
  data () {
    return {
      hVisible: false
    }
  },
  methods: {
    ...mapActions([
      'saveHeadings',
      'saveItem'
    ]),
    changeToHeading (data) {
      const updatedHeadingSelection = map(this.item.headings, (item, key) => key === data.headingKey)
      this.saveHeadings({ values: updatedHeadingSelection, itemIndex: this.itemIndex })
    },
    save (e) {
      this.item.title = e.target.innerText
      this.saveItem({ item: this.item, index: this.itemIndex })
    }
  }
}
</script>

<style scoped>
  [contenteditable]:focus {
    outline: 0px solid transparent;
  }
</style>

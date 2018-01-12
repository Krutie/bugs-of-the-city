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
    v-model="item.title" @blur="dummySave"
          :class="[{ 'heading1': item.headings.h1,
            'heading2': item.headings.h2, 
            'heading3': item.headings.h3, 
            }]" >
            {{ item.title }}  <!-- {{ item }} -->
      </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import _ from 'lodash'
export default {
  props: ['preview', 'contenteditable', 'item', 'itemIndex'],
  data () {
    return {
      hVisible: false
    }
  },
  methods: {
    ...mapActions({
      saveHeadings: 'saveHeadings',
      saveItem: 'saveItem'
    }),
    changeToHeading (data) {
      let updatedHeadingSelection = _.map(this.item.headings, (item, key) => {
        if (key === data.headingKey) {
          return true
        } else {
          return false
        }
      })
      this.saveHeadings({ values: updatedHeadingSelection, itemIndex: this.itemIndex })
    },
    dummySave (e) {
      this.item.title = e.target.innerText
      this.saveItem({ item: this.item, index: this.itemIndex })
    }
  }
}
</script>

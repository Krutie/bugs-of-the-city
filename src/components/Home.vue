<template>
  <div class="container">
    <div style="width: 930px; margin: 0 auto;">
      <GridView></GridView>
      <div style="background: #FCE4EC; text-align: center; padding: 50px; margin: 50px 0; border-radius: 5px;">
        <h4> Grid Layout Editor made with <strong>Vue Js</strong> using <strong>Vue Grid Layout</strong> </h4>
        <div> Check out same project built with
           <strong><a href="http://gridstack.surge.sh/#/" target="_blank">GridStack.js</a></strong> for an eLearning use case.
        </div>
        <div> This R&amp;D project is developed to test grid-layout library for 
          <strong> <a href="https://www.pariksha.io" target="_blank"> pariksha.io</a></strong>.
        </div>
        <div> Read <strong><a href="https://medium.com/@krutie/grid-layout-editor-for-vue-js-a-research-project-for-pariksha-io-e3445025d21e" target="_blank"> supporting medium article </a></strong> to learn more. </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import GridView from './editor/GridView'

export default {
  name: 'home',
  components: { GridView },
  methods: {
    ...mapActions({
      fetchResources: 'fetchResources'
    })
  },
  created () {
    this.fetchResources()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  [contenteditable]:focus {
    outline: 0px solid transparent;
  }
</style>

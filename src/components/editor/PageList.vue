<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(page, key) in resources">
      {{ page.name }}
      <i @click="deletePage(key)" class="fa fa-trash" aria-hidden="true"></i>
      <i @click="setActivePage(key)" class="fa fa-eye" aria-hidden="true"></i>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'pagelist',
  computed: {
    ...mapGetters({
      resources: 'getResources',
      isLoading: 'isLoading'
    })
  },
  methods: {
    ...mapMutations({
      setActivePage: 'setActivePage'
    }),
    ...mapActions({
      fetchResources: 'fetchResources',
      deletePage: 'deletePage'
    }),
    activate (k) {
      this.$emit('activate', k)
    }
  },
  created () {
    this.fetchResources()
  }
}
</script>
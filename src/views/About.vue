<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>This is an about page</h2>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    console.log(this.$route)
  }
})
</script>

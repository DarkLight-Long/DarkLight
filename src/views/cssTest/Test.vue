<template>
  <div>
    <div style="--dalay: 1"></div>
    <div style="--dalay: 2"></div>
    <div style="--dalay: 3"></div>
    <div style="--dalay: 4"></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style lang="scss" scoped>
 div {
   div {
     width: 10px;
     height: 10px;
     border-radius: 6px;
     background-color: red;
     // 未知原因undefined --delay
     margin-left: calc(var(--delay) * 10px);
   }
 }
</style>

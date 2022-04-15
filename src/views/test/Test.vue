<template>
  <div class="content">
    <div class="card">Test</div>
  </div>
</template>
<script lang="ts">
// https://code.juejin.cn/pen/7085519500338167815
// Not completed
import Vue from 'vue'
export default Vue.extend({
  mounted () {
    console.log('test')
  }
})
</script>
<style lang="scss" scoped>
  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
  /* 未知原因undefined */
  :root {
    --card-width: 200px;
    --card-height: 130px
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 130px;
    height: 200px;
    /* width: var(--card-width); */
    /* height: var(--card-height); */
    color: black;
    background: #191c29;
    border-radius: 9px;
    font-family: cursive;
  }
  .card:hover {
    color: wheat;
    transition: color 1s;
  }
  .card::before:hover,.card::after:hover {
    animation: none;
    opacity: 0;
  }
  .card::before {
    content: "";
    position: absolute;
    width: 140px;
    height: 210px;
    top: -5px;
    left: -5px;
    border-radius: 8px;
    background-image: linear-gradient(
      var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2
    );
    z-index: -1;
    animation: spin 2.5s linear infinite;
  }
  .card::after {
    content: "";
    position: absolute;
    width: 130px;
    height: 200px;
    border-radius: 8px;
    background-color: #212534;
    z-index: 1;
    background-image: linear-gradient(
      var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2
    );
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
  }
  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
</style>

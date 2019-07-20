<template>
  <div v-show="show" class="loading-wrapper">
    <img src="../../assets/loading.png" alt="" class="loading"/>
    <p>loading...</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'loading',
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style>
  .loading-wrapper {
    background: #e3e3e3;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .loading {
    animation: rotate 2s infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

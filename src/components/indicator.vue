<template>
  <div class="indicator"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'indicator'
    // 滚动指示器
    // https://www.zhangxinxu.com/study/201903/css-idea/behavior-indicator.php?aside=0
  }
</script>

<style>
  .indicator {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right top, forestgreen 50%, transparent 50%) no-repeat;
    /*设置为99避免到最底下消失*/
    background-size: 100% calc(100% - 99vh);
    z-index: 50;
    pointer-events: none;
    mix-blend-mode: darken;
  }

  .indicator::after {
    content: '';
    position: fixed;
    top: 5px;
    bottom: 0;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 50;
  }
</style>

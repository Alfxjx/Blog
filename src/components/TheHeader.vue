<template>
  <div id="the-header">
    <div class="header-side header-left">
      <img src="../assets/logo.png" width="64" height="18" alt="logo" @click="goHome()">
      <div class="header-btn">
        {{btn1}}
      </div>
      <div class="header-btn">
        {{btn2}}
      </div>
      <div class="header-btn round-btn">
        <img src="../assets/add.png" width="20" height="20" alt="">
      </div>
    </div>
    <div class="header-side header-right">
      <div class="header-btn round-btn">
        <img src="../assets/man.png" width="20" height="20" alt="">
      </div>
      <div class="header-btn round-btn">
        <img src="../assets/github.png" width="20" height="20" alt="">
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        btn1: '归档',
        btn2: '关于'
      }
    },
    methods: {
      goHome() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style>
  ::selection {
    background-color: #22658c;
    color: white;
    text-shadow: none;
  }

  #the-header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3em;
    padding-top: 1em;
    color: #000;
  }

  .header-side {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06);
  }

  .header-left {
    flex: 0 0 250px;
    padding-left: 1em;
  }

  .header-right {
    flex: 0 0 150px;
  }

  @media screen and (max-width: 700px) {
    .header-left {
      flex: 0 0 220px;
      padding-left: 10px;
    }

    .header-right {
      flex: 0 0 80px;
    }
  }

  .header-right:first-child {
    margin-left: 1em;
  }

  .header-btn {
    padding: 0.2em 0.6em;
    font-weight: 700;
  }

  .round-btn {
    margin-top: 0.3em;
  }
</style>

<template>
  <div id="the-header">
    <div class="header-side header-left">
        <img src="../assets/logo.png" width="64" height="18" alt="logo">
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
        <div class="header-btn">
            <img src="../assets/github.png" width="20" height="20" alt="">
        </div>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        return {
            btn1:'归档',
            btn2:'关于'
        }
    }
}
</script>

<style>
    ::selection{
        background-color: #006666;
        color:white;
        text-shadow: none;
    }
    #the-header{
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 3em;
        padding-top: 1em;
        color: #494b4c;
    }
    .header-side {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: transparent;
        box-shadow:  0 1px 1px 0 rgba(0,0,0,.06);
    }
    .header-left{
        flex:0 0 250px;
        padding-left: 1em; 
    }
    .header-right{
        flex:0 0 150px;
    }
    .header-right:first-child{
        margin-left: 1em;
    }
    .header-btn{
        padding: 0.2em 0.6em;
        font-weight: 700;
    }
   
</style>

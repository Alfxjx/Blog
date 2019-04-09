<template>
  <div id="home-card">
      <div class="card-left">
          <div class="author-info">
              <img class="card-avatar" src="../assets/avatar.png" alt="ava">
              <span class="card-date">2019-12-12</span>
          </div>
          <div class="card-title">title测试</div>
          <div class="card-desc">测试测试测试测试测试测试测试测试</div>
      </div>
      <div class="card-right">
          <img class="card-picture" src="../assets/pl.jpg" alt="头图">
          <div class="card-stat">
              <div class="card-comment card-stat-item">
                  <img class="card-icon" src="../assets/comment.png" alt="评论">
                  <span class="card-count">2</span>
              </div>
              <div class="card-view card-stat-item">
                  <img class="card-icon" src="../assets/view.png" alt="阅读">
                  <span class="card-count">142</span>
              </div>
              <div class="card-like card-stat-item">
                  <img class="card-icon" src="../assets/like.png" alt="喜欢">
                  <span class="card-count">231</span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    
}
</script>

<style>
#home-card{
    width: 48%;
    max-width: 600px;
    margin: 1em 0;
    padding: 0.2em 0.8em 0.5em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-shadow:  0 1px 1px 2px rgba(0,0,0,.16);
}
.card-left{
    flex:1;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0.2em;
}
.author-info{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.card-date{
    font-size: 0.8em;
    line-height: 1.25em;
    color: rgb(121,121,121);
}
.card-avatar{
    width: 1em;
    height:1em;
}
.card-title{
    font-size: 1.5em;
    color: #22658c;
    font-weight: 600;
    margin: 0.5em 0;
}
.card-desc{
    line-height: 1.35em;
    color: rgb(66, 66, 66);
}
.card-right{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.card-picture{
    flex:8;
    width: 100%;
    height: 100%;
    margin-bottom: 0.5em;
    border-radius: 5px;
    box-shadow:  0 1px 1px 0 rgba(0,0,0,.16);
}
.card-stat{
    flex:2;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.card-stat-item{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.card-icon{
    width: 1.3em;
    height: 1.3em;
}
.card-count{
    line-height: 1.3em;
}
</style>
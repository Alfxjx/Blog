<template>
  <div id="home-sidebar">
    <div class="side-about">
        <img class="side-avatar" src="../assets/pl.jpg" alt="avatar">
        <div class="about-detail">
            <span class="about-name">薄墨无痕</span>
            <span class="about-desc">薄墨无痕薄墨无痕薄墨无痕</span>
        </div>
    </div>
    <div class="rank-list-sort">
        <div class="rank-logo">
            <img class="card-icon" src="../assets/sort.png" alt="">
            <span>排行榜</span>
        </div>
        <select class="rank-sort-select">
            <option value="view">阅读数</option>
            <option value="like">点赞数</option>
            <option value="comment">评论数</option>
        </select>
    </div>
    <ul class="rank-list">
        <li>
            <span>1</span>
            吃的是的生命
        </li>
    </ul>
  </div>
</template>
<script>
// TODO 断点设置在960px
export default {
    
}
</script>

<style>
#home-sidebar{
    flex: 0 0 250px;
    max-height: 400px;
    margin: 1em 1.25em 0 1.5em;
    padding: 0.2em 0.5em;;
    box-shadow:  0 1px 1px 2px rgba(0,0,0,.16);
}
.side-about{
    display: flex;
    align-items: center;
    margin: 0.5em 0.3em;
}
.side-avatar{
    width: 4em;
    height: 4em;
    border-radius: 50%;
}
.about-detail{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0.5em;
}   
.about-name{
    line-height: 1em;
    font-size: 1.2em;
    margin-bottom: 0.5em;
    font-weight: 700;
}
.about-desc{
    line-height: 1.25em;
    font-size: 0.8em;
    color: rgb(121,121,121);
}
.rank-list-sort{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em 0;
}
.rank-logo{
    display: flex;
    align-items: center;
}
.rank-list{
    margin-left: 1em;
}
</style>
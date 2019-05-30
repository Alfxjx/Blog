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
        <img class="card-icon" src="../assets/sort.png" alt>
        <span>排行榜-以{{selectedShow}}排序</span>
      </div>
      <select class="rank-sort-select" v-model="selected">
        <option value="view">阅读数</option>
        <option value="like">点赞数</option>
        <option value="comment">评论数</option>
      </select>
    </div>
    <ul class="rank-list" v-if="selected === 'view'">
      <!--TODO-->
      <li
        class="rank-list-item"
        v-for="(item,indexCount) in topCount"
        :key="indexCount"
      >{{++indexCount}} {{item.title}}
      </li>
    </ul>
    <ul class="rank-list" v-else-if="selected === 'like'">
      <li
        class="rank-list-item"
        v-for="(item,indexLike) in topLike"
        :key="indexLike"
      >{{++indexLike}} {{item.title}}
      </li>
    </ul>
    <ul class="rank-list" v-else-if="selected === 'comment'">
      <li
        class="rank-list-item"
        v-for="(item,indexComment) in topComment"
        :key="indexComment"
      >{{++indexComment}} {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  // TODO 断点设置在960px
  export default {
    data() {
      return {
        selected: 'view'
      }
    },
    created() {
      this._getTop()
    },
    computed: {
      selectedShow() {
        if (this.selected === 'view') {
          return '阅读数'
        } else if (this.selected === 'like') {
          return '点赞数'
        } else if (this.selected === 'comment') {
          return '评论数'
        } else {
          return false
        }
      },
      topCount() {
        return this.$store.state.topCount
      },
      topLike() {
        return this.$store.state.topLike
      },
      topComment() {
        return this.$store.state.topComment
      }
    },
    methods: {
      _getTop() {
        this.$store.dispatch('getTopCount', {
          sort: ['blogInfo.viewCount'],
          sortBy: ['desc'],
          size: 5
        })
        this.$store.dispatch('getTopLike', {
          sort: ['blogInfo.likes'],
          sortBy: ['desc'],
          size: 5
        })
        this.$store.dispatch('getTopComment', {
          sort: ['blogInfo.countOfComments'],
          sortBy: ['desc'],
          size: 5
        })
      }
    }
  }
</script>

<style>
  #home-sidebar {
    flex: 0 0 250px;
    max-height: 400px;
    margin: 1em 1.25em 0 1.5em;
    padding: 0.2em 0.5em;
    box-shadow: 0 0 1px 1px rgba(121, 121, 121, 0.16);
  }

  #home-sidebar:hover {
    box-shadow: 1px 1px 1px 2px rgba(121, 121, 121, 0.16);
  }

  @media screen and (max-width: 700px) {
    #home-sidebar {
      margin-bottom: 2em;
    }
  }

  .side-about {
    display: flex;
    align-items: center;
    margin: 0.5em 0.3em;
  }

  .side-avatar {
    width: 4em;
    height: 4em;
    border-radius: 50%;
  }

  .about-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0.5em;
  }

  .about-name {
    line-height: 1em;
    font-size: 1.2em;
    margin-bottom: 0.5em;
    font-weight: 700;
  }

  .about-desc {
    line-height: 1.25em;
    font-size: 0.8em;
    color: rgb(121, 121, 121);
  }

  .rank-list-item {
    margin: 0.5em 1em 0.5em 0em;
    padding-left: 0.5em;
  }
  .rank-list-item:hover{
    color: #22658c;
    border-left: 2px solid #22658c;
  }
  .rank-list-sort {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em 0;
  }

  .rank-logo {
    display: flex;
    align-items: center;
  }

  .rank-list {
    margin: 1em 0 0 1em;
    padding: 0;
  }
</style>

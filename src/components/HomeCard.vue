<template>
  <!--没有这个wrapper就会不好列表渲染了-->
  <div class="card-wrapper">
    <div id="home-card">
      <div class="card-left" @click="goContent">
        <div class="author-info">
          <img class="card-avatar" src="../assets/avatar.png" alt="ava">
          <span class="card-date">{{time}}</span>
        </div>
        <div class="card-title">{{title}}</div>
        <div class="card-desc">{{desc}}</div>
        <div class="card-category">
          <span class="card-sharp">#</span>
          {{category}}
        </div>
      </div>
      <div class="card-right">
        <div class="img-wrapper" @click="goContent">
          <img class="card-picture" :src="img" alt="头图">
        </div>
        <div class="card-stat">
          <div class="card-comment card-stat-item">
            <img class="card-icon" src="../assets/comment.png" alt="评论">
            <span class="card-count">{{countOfComments}}</span>
          </div>
          <div class="card-view card-stat-item">
            <img class="card-icon" src="../assets/view.png" alt="阅读">
            <span class="card-count">{{viewCount}}</span>
          </div>
          <div class="card-like card-stat-item" @click="addLike(_id)">
            <img class="card-icon" src="../assets/like.png" alt="喜欢">
            <span class="card-count">{{like}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { generalRequest } from '../api/api'
  import { Notification } from 'element-ui'

  export default {
    name: 'card',
    props: [
      'img',
      'title',
      'desc',
      'category',
      'tag',
      'viewCount',
      '_id',
      'like',
      'createdAt',
      'countOfComments'
    ],
    data() {
      return {
        liked: false
      }
    },
    computed: {
      time() {
        if (this.createdAt) {
          let time = this.createdAt.toString()
          return time.slice(0, 10)
        } else {
          return ''
        }
      }
    },
    methods: {
      goContent() {
        console.log(this._id)
        this.$router.push('/blog/' + this._id)
      },
      async addLike(id) {
        // 使用generalRequest
        const like = await generalRequest('/blog/like/' + id, 'put')
        console.log(like)
        if (!like) {
          Notification({
            title: 'fail',
            type: 'warning',
            message: like.msg,
            offset: 60,
            duration: 2500
          })
        } else {
          Notification({
            title: 'result',
            message: like.msg,
            type: 'info',
            offset: 60,
            duration: 2500
          })
        }
      }
    }
  }
</script>

<style>
  .card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #home-card {
    position: relative;
    width: 100%;
    max-width: 600px;
    min-width: 330px;
    margin: 1em;
    padding: 0.2em 0.8em 0.5em;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    box-shadow: 0 0 1px 1px rgba(121, 121, 121, 0.16);
  }

  #home-card:hover {
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.16);
  }

  .card-title:hover {
    color: #13888c;
  }

  .card-desc:hover {
    color: dimgrey;
  }

  @media screen and (max-width: 700px) {
    .card-wrapper {
      width: 80%;
    }

    #home-card {
      width: 100%;
      margin: 1em 0.5em;
      font-size: 0.7em;
    }

    .card-title {
      margin: 0.3em 0;
    }

    .card-desc {
      height: 3em;
    }

    .card-category {
      margin-top: 0.5em;
    }
  }

  .card-left {
    flex: 1;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0.2em;
  }

  .card-category {
    position: absolute;
    bottom: 1em;
    left: 1em;
    font-weight: 500;
  }

  .card-category:hover {
    color: rgb(121, 121, 85);
  }

  .card-sharp {
    color: #22658c;
    margin-right: 0.2em;
  }

  .author-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .card-date {
    font-size: 0.8em;
    line-height: 1.25em;
    color: rgb(121, 121, 121);
  }

  .card-avatar {
    width: 1em;
    height: 1em;
  }

  .card-title {
    font-size: 1.5em;
    color: #22658c;
    font-weight: 600;
    margin: 0.5em 0;
  }

  .card-desc {
    line-height: 1.25em;
    color: rgb(66, 66, 66);
    height: 5em;
    overflow: hidden;
  }

  .card-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .img-wrapper {
    width: 16em;
    height: 10em;
    margin-left: 1em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  }

  .card-picture {
    flex: 8;
    width: 100%;
    height: 100%;
  }

  .card-stat {
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .card-stat-item {
    padding: 0.1em 0.3em;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .card-like {
    background: #22658c;
    border-radius: 5px;
    color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  }

  .card-icon {
    width: 1.3em;
    height: 1.3em;
    margin-right: 0.2em;
  }

  .card-count {
    line-height: 1.3em;
  }
</style>

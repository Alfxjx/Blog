<template>
  <div id="archive">
    <div class="main-page">
      <the-header></the-header>
      <div class="arch-main">
        <div class="arch-list">
          <span class="arch-year">2019</span>
          <ul class="reverse-list">
            <li
              class="arch-item"
              v-for="(item,index) in blogList"
              :key="index"
              @click="goContent(item._id)"
            >
              <span class="arch-item-date">{{item.createdAt | formatDate}}</span>
              <span class="arch-item-title">{{item.title}}</span>
            </li>
          </ul>
        </div>
        <div class="arch-tag">
          <div class="tag-list">
            <div
              class="tag-item"
              v-for="(tagItem,index) in tagList"
              :key="index"
            >
              <span class="tag-item-name">{{tagItem._id}}</span>
              <span class="tag-item-count">{{tagItem.count}}</span>
            </div>
          </div>
          <div class="tag-list category-list">
            <div
              class="tag-item"
              v-for="(cateItem,index) in categoryList"
              :key="index"
            >
              <span class="tag-item-name">{{cateItem._id}}</span>
              <span class="tag-item-count">{{cateItem.count}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import TheHeader from '../components/TheHeader.vue'
  import TheFooter from '../components/TheFooter.vue'

  export default {
    name: 'archive',
    created() {
      // 解决直接跳转无数据的问题。
      if (this.$store.state.blogList) {
        this.$store.dispatch('getBlogList')
        this.$store.dispatch('getTagList')
        this.$store.dispatch('getCategoryList')
      }
    },
    computed: {
      blogList() {
        return this.$store.state.blogList
      },
      tagList() {
        return this.$store.state.tagList
      },
      categoryList() {
        return this.$store.state.categoryList
      }
    },
    methods: {
      goContent(id) {
        this.$router.push('/blog/' + id)
      }
    },
    filters: {
      formatDate(e) {
        return e.slice(5, 10)
      },
      formatYear(e) {
        return e.slice(0, 4)
      }
    },
    components: {
      TheHeader, TheFooter
    }
  }
</script>

<style>
  #archive {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  }

  .main-page {
    flex: 1;
  }

  .arch-main {
    padding: 6em 3em 0;
    display: flex;
    flex-direction: row;
  }

  .arch-list {
    flex: 7;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  .arch-list:hover {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  }

  .arch-year {
    font-size: 2em;
    margin: 1em 0 0 1em;
    color: #22658c;
    font-weight: 500;
  }

  .reverse-list {
    display: flex;
    flex-direction: column-reverse;
  }

  .arch-item {
    padding: 0.5em 1em;
    border-left: 1px solid rgb(121, 121, 121);
  }

  .arch-item:hover {
    color: #22658c;
    border-left: 5px solid #22658c;
  }

  .arch-item-date {
    margin-right: 1em;
  }

  .arch-item-title {
  }

  .arch-tag {
    flex: 2;
    margin-left: 2em;
    background-color: white;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  .arch-tag:hover {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  }

  .tag-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1em;
  }

  .tag-item {
    background: #22658c;
    border-radius: 0.8em;
    padding: 0.2em 0.5em;
    margin: 0.4em;
    color: #f3f5f7;
  }

  .tag-item-name {
  }

  .tag-item-count {
    margin-left: 0.2em;
  }

  @media screen and (max-width: 700px) {
    .arch-main {
      display: flex;
      flex-direction: column-reverse;
    }

    .arch-list {
      flex: 0;
      margin-top: 1em;
      box-shadow: 0 1px 5px 0 rgba(121, 121, 121, 0.15);
    }

    .arch-tag {
      flex: 0;
      margin-left: 0;
      box-shadow: 0 1px 5px 0 rgba(121, 121, 121, 0.15);
    }
  }
</style>

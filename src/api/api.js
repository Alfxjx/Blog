import axios from 'axios'
import qs from 'qs'

const urlMap = {
  devlopment: '/api',
  production: 'http://www.alfxjx.club/api-blog'
}

const baseUrl = urlMap[process.env.NODE_ENV === 'production' ? 'production' : 'production']

function get(url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const { statusCode, msg, data } = res.data
      if (statusCode === 1) {
        console.log(msg)
        return data
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}

const getList = get('/blog')
const getCategory = get('/blog-category')
const getTag = get('/blog-tags')
export {
  get,
  getList,
  getCategory,
  getTag
}

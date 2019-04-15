import axios from 'axios'
import qs from 'qs'

const urlMap = {
  devlopment: '/api',
  production: 'http://www.alfxjx.club/api-blog'
}

const baseUrl = urlMap[process.env.NODE_ENV === 'production' ? 'production' : 'devlopment']


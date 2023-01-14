import apiClient from '@/service/AxiosClient.js'
export default {
  add_bookmark(user_id, anime_id, score) {
    return apiClient.post('/add_bookmark', {
      user_id: user_id,
      anime_id: anime_id,
      score: score
    })
  },
  remove_bookmark(user_id, anime_id) {
    return apiClient.post('/remove_bookmark', {
      user_id: user_id,
      anime_id: anime_id
    })
  },
  get_bookmark(user_id) {
    return apiClient.post('/getBookmark', {
      user_id: user_id
    })
  }
}

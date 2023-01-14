import apiClient from '@/service/AxiosClient.js'
export default {
  add_bookmark(user_id, anime_id, score) {
    return apiClient.post('/add_bookmark', {
      user_id: user_id,
      anime_id: anime_id,
      score: score
    })
  }
}

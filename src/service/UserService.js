import apiClient from '@/service/AxiosClient.js'
export default {
  add_bookmark(input) {
    return apiClient.post('/add_bookmark', input)
  }
}

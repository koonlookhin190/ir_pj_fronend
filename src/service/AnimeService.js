import apiClient from '@/service/AxiosClient.js'
import GStore from '@/store'
export default {
  getAnimeList(input) {
    return apiClient
      .post('/search', input)
      .then((response) => {
        console.log(response)
        GStore.animeList = response.data
      })
      .catch((error) => {
        return console.log(error)
      })
  }
}

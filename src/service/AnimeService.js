import apiClient from '@/service/AxiosClient.js'
import GStore from '@/store'
export default {
  getAnimeList(input) {
    return apiClient
      .post('/search', input)
      .then((response) => {
        console.log(response.data)
        var keep = JSON.stringify(response.data)
        console.log(JSON.parse(keep))
        var keep2 = JSON.parse(keep)
        GStore.animeList = keep2
      })
      .catch((error) => {
        return console.log(error)
      })
  }
}

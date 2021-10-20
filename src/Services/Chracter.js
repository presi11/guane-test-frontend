new Vue({
    el: '#app',
    data () {
      return {
        info: null,
        loading: true,
        errored: false
      }
    },
    mounted () {
      axios
        .get('https://rickandmortyapi.com/api/character/1')
        .then(response => {
          this.info = response.data.bpi
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  })
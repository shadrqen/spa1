<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    async callBackend () {
      await axios.get('http://localhost:3000')
        .then(async res => {
          console.log(res.data.message)
          await axios.get('http://localhost:3000/get_all_users')
            .then(innerRes => {
              console.log(innerRes.data)
            })
            .catch(innerErr => {
              console.error(innerErr)
            })
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted () {
    this.callBackend()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

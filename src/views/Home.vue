<template>
  <div class="home">
    <v-btn @click="fetchData">Fetch data</v-btn>
    <v-flex :key="index" v-for="(post, index) in posts" xs12>
      <div>{{ post.id }}</div>
      <div>{{ post.title }}</div>
    </v-flex>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
    posts: any[] = []

    setData (posts:[]) {
      this.posts = posts
      // send event to finish a prerender
      setTimeout(() => {
        document.dispatchEvent(new Event('custom-render-trigger'))
      }, 1000)
    }

    async beforeRouteEnter (_to: any, _from: any, next: any) {
      const posts: any = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      next((vm: { setData: (arg0: any) => void; }) => vm.setData(posts.data))
    }
}
</script>

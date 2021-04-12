<template id="t1">
  <div>
    <h1>Photos</h1>
    <div v-if="loading">Please wait....</div>
    <div v-else>
      <div v-if="photos.length === 0">No Photos Exist</div>
      <div v-else>
        <!-- <div v-for="(photo, index) of photos" :key="index">
          {{ photo.title }}
        </div> -->
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src=''
          >
            <v-card-title>
                 <div v-for="(photo, index) of photos" :key="index">
          {{ photo.title }}
        </div> 
            </v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "API",
  data() {
    return {
      show: false,
      loading: false,
      photos: {},
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        this.photos = response.data;
        this.loading = false;
      } catch (error) {
        window.console.log(error);
        this.loading = false;
      }
    },
  },
};
</script>

<style >

</style>
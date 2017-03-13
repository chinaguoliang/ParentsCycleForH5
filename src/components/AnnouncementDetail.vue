<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>ParentsCycle details</h2>

  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'AnnouncementDetail',
  data () {
    return {
      msg: 'ParentsCycle'
    }
  },
  mounted() {
    //Vue.http.options.xhr = { withCredentials: true }
    //Vue.http.get('http://www.amidgame.cn/api/attendance/getAllLocation').then(response => {
      // get body data
      //this.someData = response.body;
      //console.log("success");
    //}, response => {
      // error callback
      //console.log("failed");
    //});



      this.$http.jsonp('http://localhost:8081/videoTime/getVideoControlTime?schoolid=1&classid=')
        .then(function (response) {
          console.log(response.data)
      }, function (response) {
          // error callback
          console.log('failed')
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

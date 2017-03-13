<template>

  <div class="hello">
    <ol>
      <li v-for="item in datas">
        {{item.class_id}}
      </li>
    </ol>

  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'AnnouncementDetail',
  data () {
    return {
      msg: 'ParentsCycle',
      datas:''
    }
  },
  mounted() {
      this.$http.jsonp('http://localhost:8081/videoTime/getVideoControlTime?schoolid=1&classid=')
        .then(function (response) {
          console.log(response.data)
          this.datas = response.data.obj;
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

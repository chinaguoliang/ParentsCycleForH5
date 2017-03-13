<template>

  <div class="hello">
    <!--<swiper :list="imgs" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>-->
      <li v-for="item in datas">
        {{item.class_id}}
      </li>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <rater></rater>
  </div>
</template>

<script>
import Vue from 'vue';
//import Swiper from 'vux';
import { Group, Cell,Rater } from 'vux'


export default {
  name: 'AnnouncementDetail',
  data () {
    return {
      msg: 'ParentsCycle',
      datas:'',
      imgs:[
     'http://file06.16sucai.com/2016/0222/17714c3b51079911760e5ef7fdb553f6.jpg',
     'http://pic.58pic.com/58pic/15/67/98/93C58PICjeM_1024.jpg',
     'http://file06.16sucai.com/2016/0315/1df566087c24a94cd9534bc9bc1871ff.jpg'
     ],
    }
  },components:{
      Group,
      Cell,
      Rater
  },mounted() {
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

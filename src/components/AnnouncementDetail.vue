<template>

  <div class="hello">
    <!--<swiper :list="imgs" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>-->
      <li v-for="item in datas">
        {{item.class_id}}
      </li>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <scroller enable-horizontal-swiping="" lock-x="" pulldown:loading="load" scrollbar-y="" use-pulldown="">

      <swiper :list="list" :min-moving-distance="20" auto="" direction="horizontal" height="180px"></swiper>
    </scroller><scroller enable-horizontal-swiping="" lock-x="" pulldown:loading="load" scrollbar-y="" use-pulldown="">
  </scroller>
  </div>
</template>

<script>
import Vue from 'vue';
//import Swiper from 'vux';
import { Group, Cell, Tab, TabItem, Swiper, SwiperItem, Card, Scroller } from 'vux'


export default {
  name: 'AnnouncementDetail',
  data () {
    return {
      msg: 'ParentsCycle',
      datas:'',
      list: [{
        url: 'http://www.baidu.com',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489388986814&di=b1e6c9b10e2f622cb2702df59e0fd009&imgtype=0&src=http%3A%2F%2Fpic1.5442.com%3A82%2F2015%2F0409%2F01%2F15.jpg%2521960.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://www.baidu.com',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489388986813&di=ed1de05af89e6a6b95597d49a1105a12&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F14%2F25%2F43Y58PICfJB_1024.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://www.baidu.com',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489388986813&di=4aac1d6a4d6bfa16a10210c4ffb98e31&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F20120713j%2F867.jpg',
        title: '播下茶籽，明春可发芽？'
      }]
    }
  },components:{
     Group,
    Cell,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Card,
    Scroller
  },mounted() {
      //this.$http.jsonp('http://localhost:8081/videoTime/getVideoControlTime?schoolid=1&classid=')
      //  .then(function (response) {
      //    console.log(response.data)
      //    this.datas = response.data.obj;
      //}, function (response) {
          // error callback
        //  console.log('failed')
      //});
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

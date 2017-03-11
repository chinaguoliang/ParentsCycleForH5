<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>ParentsCycle details</h2>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'ParentsCycle'
    }
  },
  mounted() {
    //this.$http.get("http://www.baidu.com").then(function(res){
        //console.log(res);
        //this.$set('resData',res);
     // },function(res){
       // console.warn(res);
     // })
    console.log("hahah");
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

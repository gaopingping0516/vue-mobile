<template>
  <div class="page">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='(item, index) in imgList' :key='index'><img :src="item.img"/></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      imgList: []
    }
  },
  created(){
    axios({
      url: "http://www.liulongbin.top:3005/api/getlunbo"
    }).then(res => {
      this.imgList = res.data.message;
    })
  }
}

</script>
<style scoped>
  .mint-swipe{
    height: 160px;
  }
  .mint-swipe img{
    width: 100%;
  }
</style>


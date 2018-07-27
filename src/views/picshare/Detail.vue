<template>
    <div class="page">
        <Info :info="picInfo">
          <!-- <img :src="item.src" alt="" class="thumb" v-for="(item, index) in imgList" :key="index"> -->
          <vue-preview :slides="imgList"></vue-preview>

        </Info>
        <Comment :artid="$route.params.id"></Comment>
    </div>
</template>

<script>
import axios from "axios";
import Comment from "@/components/Comment.vue";
import Info from "@/components/Info.vue"

export default {
  components: {
    Info,
    Comment
  },
  data() {
    return {
      picInfo: {},
      imgList: []
    };
  },
  created() {
    axios({
      url:
        "http://www.liulongbin.top:3005/api/getimageInfo/" +
        this.$route.params.id
    }).then(res => {
      //   console.log(res.data.message[0]);
      this.picInfo = res.data.message[0];
    });

    axios({
      url: "http://www.liulongbin.top:3005/api/getthumimages/" + this.$route.params.id
    }).then(res => {
      // 先对数据进行加工（添加一些必要的属性）之后，再赋值给imgList
      res.data.message.forEach(v => {
        v.msrc = v.src;
        v.w = 640;
        v.h = 480;
      })

      this.imgList = res.data.message;
    })
  }
};
</script>

<style>
  .my-gallery figure{
    display: inline;
    margin:0;
  }
  .my-gallery figure a img{
    width: 18%;
    box-shadow: 0 0 3px 0;
  }
</style>



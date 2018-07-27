<template>
    <div class="page news">
        <Info :info="newsInfo"></Info>
        <div class="comment">
            <Comment :artid="$route.query.id"></Comment>
        </div>
    </div>
</template>
<script>
import axios from "axios";

// 引入评论组件
import Comment from "@/components/Comment.vue";
import Info from "@/components/Info.vue"

import dateformat from "@/filters/dateformat.js";

export default {
  filters: {
    dateformat
  },
  data() {
    return {
      newsInfo: {}
    };
  },
  created() {
    // 1. 获取传入的id
    // alert(this.$route.query.id)
    // 2. 通过ajax请求获取新闻数据
    axios({
      url: "http://www.liulongbin.top:3005/api/getnew/" + this.$route.query.id
    }).then(res => {
      // console.log(res.data.message);
      this.newsInfo = res.data.message[0];
    });
  },
  components: {
    Comment,
    Info
  }
};
</script>

<style>
.newscontent img {
  width: 100%;
}
</style>

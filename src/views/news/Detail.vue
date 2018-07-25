<template>
    <div class="page news">
        <div class="newsdetail">
            <div class="newstitle">
                <h4>{{newsInfo.title}}</h4>
                <p class="news-info">
                    <span>发表时间: {{newsInfo.add_time}}</span>
                    <span class="mui-pull-right">点击： {{newsInfo.click}}次</span>
                </p>
                <hr>
            </div>
            <div class="newscontent" v-html="newsInfo.content"></div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
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
  }
};
</script>

<style>
.news{
    padding: 5px;
}

.newscontent img{
    width: 100%;
}
</style>

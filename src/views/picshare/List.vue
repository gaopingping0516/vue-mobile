<template>
    <div class="page">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <router-link class="my-mui-control-item" to="/pic/list/0" data-wid="tab-top-subpage-1.html">
                        全部
                    </router-link>
                    <router-link class="my-mui-control-item" v-for='(item, index) in categories' :key="index" :to="'/pic/list/' + item.id" data-wid="tab-top-subpage-1.html">
                        {{item.title}}
                    </router-link>
                </div>
            </div>
        </div>
        <ul>
            <li v-for="(item, index) in imgList" :key="index">
                <router-link :to="'/pic/detail/' + item.id">
                    <img :src="item.img_url" alt="">
                    <div class="info">
                        <h5>{{item.title}}</h5>
                        {{item.zhaiyao}}
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
import mui from "@/assets/mui/js/mui.js";
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      imgList: []
    };
  },
  created() {
    axios({
      url: "http://www.liulongbin.top:3005/api/getimgcategory"
    }).then(res => {
      this.categories = res.data.message;
    });

    this.getImgList();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getImgList() {
      axios({
        url: "http://www.liulongbin.top:3005/api/getimages/" + (this.$route.params.cateid || 0)
      }).then(res => {
        this.imgList = res.data.message;
      });
    }
  },
  watch: {
      // 监视路由，在传递的cateid参数发生变化的时候，监视就会被触发 重新调用this.getImgList获取数据即可
      "$route": function(){
          this.getImgList();
      }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 10px;
}
li {
  list-style: none;
  position: relative;
  box-shadow: 0 0 15px #999;
  background-color: #ccc;
}
li .info {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 110px;
  padding: 5px;
}

li img {
  width: 100%;
}

h5 {
  color: white;
  font-weight: bolder;
}

.my-mui-control-item {
  color: inherit;
  border: 0;
  display: inline-block;
  width: auto;
  padding: 0 20px;
  border: 0;
  transition: background-color 0.1s linear;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 38px;
}
</style>

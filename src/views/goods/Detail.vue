<template>
    <div class="page">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe auto="4000">
                        <mt-swipe-item v-for="(item, index) in imgList" :key="index">
                            <img :src="item.src" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="price">
                        <span>市场价：
                            <del>￥{{goodsInfo.market_price}}</del>
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>销售价：
                            <span class="sale_price">￥{{goodsInfo.sell_price}}</span>
                        </span>
                    </div>
                    <div class="count">
                        <span>购买数量：</span>
                        <div class="mui-numbox-cms">
                            <button type="button" class="mui-btn mui-btn-numbox-minus-cms">-</button> <input type="number" class="mui-input-numbox-cms">
                            <button type="button" class="mui-btn mui-btn-numbox-plus-cms">+</button>
                        </div>
                    </div>
                    <div class="btns">
                        <mt-button type="primary">立即购买</mt-button>
                        &nbsp;
                        <mt-button type="danger">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
                    <p>上架时间：{{goodsInfo.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="$router.push('/goods/desc?id=' + $route.query.id)">商品描述</mt-button>
                 <br>
                <mt-button type="danger" size="large" plain @click="$router.push('/goods/comment?id=' + $route.query.id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import dateformat from "@/filters/dateformat"
export default {
    filters: {
        dateformat
    },
  data() {
    return {
      goodsInfo: {},
      imgList: []
    };
  },
  created() {
    axios({
      url:
        "http://www.liulongbin.top:3005/api/goods/getinfo/" +
        this.$route.query.id
    }).then(res => {
      this.goodsInfo = res.data.message[0];
    });

    axios({
        url: 'http://www.liulongbin.top:3005/api/getthumimages/' +this.$route.query.id
    }).then(res => {
        this.imgList = res.data.message;
    })
  }
};
</script>

<style>
.mui-card-footer {
    display: block !important; 
}

.sale_price{
    color: red;
    font-size: 18px;
}

.mui-numbox-cms {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 120px;
    height: 35px;
    padding: 0 40px;
    vertical-align: top;
    vertical-align: middle;
    border: 1px solid #bbb;
    border-radius: 3px;
    background-color: #efeff4;
}


.mui-numbox-cms .mui-btn-numbox-minus-cms, .mui-numbox-cms .mui-numbox-cms-btn-minus {
    left: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.mui-numbox-cms [class*=btn-numbox], .mui-numbox-cms [class*=numbox-btn] {
    font-size: 18px;
    font-weight: 400;
    line-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 40px;
    height: 100%;
    padding: 0;
    color: #555;
    border: none;
    border-radius: 0;
    background-color: #f9f9f9;
}

.mui-numbox-cms .mui-input-numbox-cms, .mui-numbox-cms .mui-numbox-cms-input {
    display: inline-block;
    overflow: hidden;
    width: 100%!important;
    height: 100%;
    margin: 0;
    padding: 0 3px!important;
    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;
    border: none!important;
    border-right: 1px solid #ccc!important;
    border-left: 1px solid #ccc!important;
    border-radius: 0!important;
}

.mui-card-content-inner>div{
    margin: 10px 0;
}

.mui-card-content-inner .mint-swipe {
    height: 180px;
}

.mint-swipe-item {
    text-align: center;
}

.mint-swipe img {
    height: 100%;
}
</style>

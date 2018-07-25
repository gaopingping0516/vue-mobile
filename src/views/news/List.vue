<template>
    <div class="page">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            newsList: []
        }
    },
    created(){
        axios({
            url:'http://www.liulongbin.top:3005/api/getnewslist'
        }).then(res => {
            this.newsList = res.data.message;
        })
    }
}
</script>


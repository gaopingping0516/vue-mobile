<template>
    <div class='page'>
        <Info :info="goodsDesc"></Info>
    </div>
</template>

<script>
import Info from "@/components/Info.vue"
import axios from "axios"
export default {
    components: {
        Info
    },
    data(){
        return {
            goodsDesc: {}
        }
    },
    created(){
        axios({
            url: "http://www.liulongbin.top:3005/api/goods/getdesc/" + this.$route.query.id
        }).then(res => {
            this.goodsDesc = res.data.message[0];
        })
    }
}
</script>

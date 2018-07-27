<template>
    <div>
        <div class="newsdetail">
            <div class="newstitle">
                <h4>{{info.title}}</h4>
                <p class="news-info">
                    <span>发表时间: {{info.add_time | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
                    <span class="mui-pull-right" v-if="info.click">点击： {{info.click}}次</span>
                </p>
                <hr>
            </div>
            
            <slot></slot>

            <div class="newscontent" v-html="info.content"></div>
        </div>
    </div>
</template>
<script>
import dateformat from "@/filters/dateformat";
export default {
  filters: {
    dateformat
  },
  props: ["info"]
};
</script>


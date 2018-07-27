<template>
	<div id="app">
		<mt-header fixed title="上海前端黑马21期">
			<mt-button v-if="$route.path != '/'" icon="back" slot='left' @click="$router.go(-1)">返回</mt-button>
		</mt-header>
		<router-view/>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="my-mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="my-mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact "></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="my-mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">9</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="my-mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<style lang="less">
.page {
	margin-top: 40px;
	margin-bottom: 50px;
	padding: 5px;
}

body {
  background-color: #fff !important;
}

.my-mui-tab-item{
	display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
	color: #929292;
	background: transparent;
	text-decoration: none;
}

.mui-bar .mui-icon {
    font-size: 24px;
    position: relative;
    z-index: 20;
    padding-top: 10px;
    padding-bottom: 10px;
}

.mui-bar-tab .my-mui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .my-mui-tab-item .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
	text-overflow: ellipsis;
}

.router-link-exact-active{
	color: #007aff
}
</style>

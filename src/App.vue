<template>
	<div id="app">
		<mt-header fixed title="上海前端黑马21期">
			<mt-button v-if="$route.path != '/'" icon="back" slot='left' @click="$router.go(-1)">返回</mt-button>
		</mt-header>
		<router-view/>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact "></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">9</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
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
}

body {
  background-color: #fff !important;
}
</style>

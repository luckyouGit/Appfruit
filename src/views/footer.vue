<template>
	<div>
		<van-tabbar v-model="active" active-color="#FC3D2B">
			<van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
			<van-tabbar-item to="/cation" icon="apps-o">分类</van-tabbar-item>
			<van-tabbar-item to="/shopping" icon="shopping-cart-o">购物车</van-tabbar-item>
			<van-tabbar-item to="/demo" icon="contact">我的</van-tabbar-item>
		</van-tabbar>
	</div>


</template>
<script>
	export default {
		data() {
			return {
				active: 0,
			}
		}
	}
</script>

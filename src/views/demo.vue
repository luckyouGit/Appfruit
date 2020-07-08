<template>

	<div class="demo">
		<div style="background:#000000; height: 7rem; width: 100%;">


		</div>


		<div style="background-color:#fefdfd;height: 10rem;width: 18rem;margin-top: -7.5rem;margin-left: 2.75rem;">

			<div style="margin-top: 4rem;">
				<van-row>
					<van-col>
						<van-image width="4rem" height="4rem" style="margin: 0.5rem 0 0 0.5rem;" :src="require('../image/4.jpg') " />
					</van-col>
					<van-col span="10" style="margin:2rem 0 0 0.8rem ;">鲜果小皇子</van-col>
					<van-col span="10" style="fcolor:#000000;float: right;margin: 2rem -5rem 0 0;">
						<van-icon name="column" />
					</van-col>
				</van-row>
			</div>
			<div style="padding-top: 2rem;padding-left: 2.3rem;">
				<van-row gutter="20">
					<van-col span="8">200</van-col>
					<van-col span="8">8</van-col>
					<van-col span="8">1600</van-col>
				</van-row>
			</div>
			<div style="padding-left: 0.5rem;">
				<van-row gutter="20">
					<van-col span="8">账户余额</van-col>
					<van-col span="8">优惠券</van-col>
					<van-col span="8">账户积分</van-col>
				</van-row>
			</div>
		</div>
		<div>
			<van-tabbar v-model="active1" :fixed="false" style="position: fixed;top: 18rem;">
				<van-tabbar-item style="color: red;" icon="card">待支付</van-tabbar-item>
				<van-tabbar-item style="color: red;" icon="send-gift">待配送</van-tabbar-item>
				<van-tabbar-item style="color: red;" to="/distri" icon="logistics">配送中</van-tabbar-item>
				<van-tabbar-item style="color: red;" icon="comment">待评价</van-tabbar-item>
				<van-tabbar-item style="color: red;" to="/all" icon="column">全部订单</van-tabbar-item>
			</van-tabbar>
		</div>
		
		<div style="position: fixed;top: 21.75rem;width: 100%;">
			<van-cell title="我的收藏" icon="like" name="like" />
			<van-cell title="优惠福利" icon="point-gift" />
			<van-cell title="会员中心" icon="diamond" />
		</div>
		<div class="label" style="position: fixed;bottom: 5rem;width: 100%;">
			<van-cell title="地址管理" icon="map-marked" />
			<van-cell title="门店/自提点查询" icon="wap-home" />
			<van-cell title="客服" icon="service" />
			<van-cell title="设置" icon="setting" />
		</div>


		
			
		<app-footer></app-footer>
	
	
	</div>
</template>
<script>
	import AppFooter from './footer.vue'
	export default {
		components: {
			AppFooter
		},
		data() {
			return {
				active1: 0,
				active2: 0,
			};
		},
	};
</script>
<style>
.demo{
	height: 39.6875rem;
}
</style>

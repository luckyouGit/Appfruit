<template>
	<div>
		<div class="nav">
			<van-nav-bar title="购物车" right-text="编辑" />
		</div>
		<div class="gonggao">
			<van-cell value="查看活动" is-link>
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<van-tag type="danger">满减</van-tag>
					<span class="custom-title">满69元,已减10元</span>

				</template>
			</van-cell>
		</div>
		<div class="fx">
			<van-checkbox v-model="checked3">
				<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="冰糖橙  5斤装" :thumb="require('../image/S5.jpg')">
					<template #tags>
						规格:约600克
					</template>
					<template #footer>
						<van-stepper v-model="value3" theme="round" button-size="22" disable-input />
					</template>
				</van-card>
			</van-checkbox>
		</div>
		<div class="hj">
			<van-nav-bar title="小计:" right-text="￥25.00" />

		</div>
		<div class="fx">
			<van-checkbox v-model="checked2">
				<van-card price="25.0/份" desc="清清脆脆 可口" title="甘肃静宁苹果*6约&nbsp;2斤" :thumb="require('../image/S14.jpg')">
					<template #tags>
						规格:约600克
					</template>
					<template #footer>
						<van-stepper v-model="value2" theme="round" button-size="22" disable-input />
					</template>
				</van-card>
			</van-checkbox>
		</div>

		<div class="hj">
			<van-nav-bar title="小计:" right-text="￥25.00" />

		</div>

		<div class="fx">
			<van-checkbox v-model="checked1">
				<van-card price="35.0/份" desc="肥宅快乐零食" title="橘子干  2斤装" :thumb="require('../image/S12.jpg')">
					<template #tags>
						规格:约600克
					</template>
					<template #footer>
						<van-stepper v-model="value1" theme="round" button-size="22" disable-input />
					</template>
				</van-card>
			</van-checkbox>
		</div>

		<div class="hj">
			<van-nav-bar title="小计:" right-text="￥35.00" />
		</div>


		<div class="dingdan">
			<router-link to="/complete">
				<van-submit-bar :price="8500" button-text="提交订单">
					<van-checkbox v-model="checked4">全选</van-checkbox>
				</van-submit-bar>
			</router-link>
		</div>
		<div>
			<app-footer></app-footer>
		</div>

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
				checked4: false,
				checked1: false,
				checked2: false,
				checked3: false,
				value1: 1,
				value2: 1,
				value3: 1,
			};
		},
	};
</script>
<style>
	.dingdan .van-submit-bar__bar {
		padding: 0 0 50px;
	}

	.van-icon .van-icon-success {
		position: fixed;
		top: 5rem;
	}

	.hljs .van-submit-bar__bar {
		padding: 0 0 36rem;
	}

	.gonggao .van-tag--danger {
		background-color: #F7F7F7;
	}

	.gonggao .van-tag {
		color: #DF5000;
		font-size: 0.8rem;
	}

	.fx .van-checkbox__label {
		width: 100%;
	}

	.van-checkbox {
		background-color: #fafafa;
	}

	.nav .van-nav-bar__text {
		color: #000000;
	}

	.hj .van-nav-bar__title {
		margin-right: 5rem;
		font-size: 1rem;
	}

	.hj .van-nav-bar__text {
		color: #DF5000;
	}

	.van-checkbox__icon--round .van-icon {
		margin-left: 2rem;
	}

	.dingdan .van-submit-bar {

		position: static;
	}
</style>

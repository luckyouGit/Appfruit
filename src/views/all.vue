<template>
	<div style="background-color: background-color:#000000;;">
		<div style="width: 100%; text-align: center;">
			<van-cell to="/demo" title="全部订单" icon="arrow-left">
				<!-- 使用 right-icon 插槽来自定义右侧图标 -->
			</van-cell>
		</div>
		<div>
			<van-tabs >
				<van-tab title="全部"></van-tab>
				<van-tab title="待支付"></van-tab>
				<van-tab title="待配送"></van-tab>
				<van-tab title="配送中"></van-tab>
				<van-tab title="待评价"></van-tab>
			</van-tabs>
		</div>
		<div class="delivery" style="margin: 1rem auto;">
			<div>
				<van-cell to="/distri" value="配送中" is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<van-tag type="danger">准时达</van-tag>
						<span class="custom-title">
							约
							<b>12:25</b>送达
						</span>
					</template>
				</van-cell>
			</div>
			<div style="margin: 1rem 0;">
				<van-card num="2" price="50.00" desc="规格:2.5kg/份" title="水蜜桃*6  约5斤装" :thumb="require('../image/S6.jpg')" />
			</div>
			<div>
				<van-card num="2" price="70.00" desc="规格:1kg/份" title="李子 约2斤装" :thumb="require('../image/S7.jpg')" />
			</div>
			<div class="an">
				<van-card  price="240.00:合计">
					<template #footer>
						<router-link to="/shopping">
							<van-button size="mini">再来一单</van-button>
						</router-link>
						<van-button size="mini">确定送达</van-button>
					</template>
				</van-card>
			</div>
		</div>
		<div class="delivery" style="margin: 1rem auto;">
			<div>
				<van-cell value="配送中" is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template #title>
						<van-tag type="danger">次日达</van-tag>
						<span class="custom-title" style="width: 1.625rem;">
							约
							<b>明天12:25</b>到
						</span>
					</template>
				</van-cell>
			</div>
			<div>
				<van-card num="2" price="50.00" desc="规格:2.5kg/份" title="甘肃静宁苹果*6 约5斤" :thumb="require('../image/S14.jpg')" />
			</div>

			<div class="an">
				<van-card  price="100.00:合计">
					<template #footer>
						<van-button size="mini">再来一单</van-button>
						<van-button size="mini">确定送达</van-button>
					</template>
				</van-card>
			</div>
		</div>

		<div class="delivery">
			<div>
				<van-cell title="2019-5-6 12:56" value="订单已完成" size="large" />
			</div>
			<div>
				<van-card num="2" price="25.00" desc="规格:2.5kg/份" title="海南新鲜大鸭梨*5 约5斤" :thumb="require('../image/S1.jpg')" />
			</div>
			<div>
				<van-card num="2" price="25.00" desc="规格:2.5kg/份" title="广西北海火龙果*5 约5斤" :thumb="require('../image/S2.jpg')" />
			</div>
			<div class="an">
				<van-card  price="100.00:合计">
					<template #footer>
						<van-button size="mini">再来一单</van-button>
						<van-button size="mini">确定送达</van-button>
					</template>
				</van-card>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.delivery {
		border: 0.0625rem solid #e7e1cd;
		border-radius: 0.5rem;
		width: 96%;
		margin: auto;
		z-index: 999;
	}

	.delivery .custom-title {
		margin-left: 0.5rem;
	}

	.delivery .van-tag--danger {
		background-color: white;
		border: 0.0625rem solid red;
		border-radius: 0.4rem 0 0.4rem 0rem;
		color: red;
	}

	b {
		color: red;
	}

	.van-cell__value span {
		color: red;
	}

	.hj .van-nav-bar__text {
		font-weight: bold;
	}

	.an .van-button--default {
		width: 5rem;
		border-radius: 0.8rem;
		font-size: 0.875rem;
	}
</style>

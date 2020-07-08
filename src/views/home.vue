<template>
	<div>
		<div class="top">
			<div class="location">
				<van-icon name="location-o" size="1.6em" color="#ffffff" />
			</div>
			<div class="search">
				<van-search shape="round" background="#12191f" placeholder="车厘子" />
			</div>
			<van-icon name="scan" size="1.6em" color="#ffffff" style="position: absolute;top: 1rem;right: 1rem;" />
		</div>
		<div style="width: 100%; height: 18rem; position: relative; background: #fff; border: 1px solid #fff;">
			<div class="poster"></div>
			<div class="nav">
				<div style=" width: 9rem; height: 5rem; border-radius: 0.4rem; float: left; background:#e15349;">
					<h2 style="font-size: 0.825rem;margin-top: 0.9rem;">专题预售</h2>
					<p style="font-size:0.525rem;">带来偏远地区的原生鲜果</p>
					<p style="font-size:0.525rem;">送去一份份温暖的爱心</p>
				</div>
				<div style=" width: 5.45rem; height: 5rem; margin-left: 0.55rem; border-radius: 0.4rem; float: left; background: #ff984d;">
					<h2 style="margin-top: 0.9rem;font-size:0.825rem;">邀请好友</h2>
					<p style="font-size:0.525rem;">30元红包</p>
					<p style="font-size:0.525rem;">等你拿</p>
				</div>
				<div style=" width: 5.45rem; height: 5rem; margin-left: 0.55rem; border-radius: 0.4rem; float: left; background: #fec64b;">
					<h2 style="margin-top: 0.9rem;font-size:0.825rem;">扶贫助困</h2>
					<p style="font-size:0.525rem;">带来自然鲜果</p>
					<p style="font-size:0.525rem;">送去温暖爱心</p>
				</div>
			</div>
			<div class="news">
				<div style="color: #fe4644; font-weight: bold;font-size: 1.2rem; margin:0.1rem 0 0 1.2rem;">鲜果快报</div>
				<div>
					<van-notice-bar left-icon="volume-o" :scrollable="false" style="width: 13.5rem; height: 2rem; border-radius: 2rem; background: #f6f6f6; line-height: 2rem; margin-left: 0.65rem;">
						<van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
							<van-swipe-item>今年的砂糖橘，为何这般的清甜</van-swipe-item>
							<van-swipe-item>今年的苹果，为何这般的清甜</van-swipe-item>
							<van-swipe-item>今年的香蕉，为何这般的清甜</van-swipe-item>
						</van-swipe>
					</van-notice-bar>
				</div>
			</div>
		</div>
		<div class="goods">
			<van-row gutter="20" type="flex" justify="space-between">
				<van-col span="8" style="color: #2d3333; font-weight:900;">拼团预售</van-col>
				<van-col span="8" style="color: #bababa; font-size: 0.9rem;">产地直采·品质保证</van-col>
			</van-row>
			<div class="goodsCenter">
				<van-image width="6rem" height="6rem" style="margin: 0.8rem 0 0 1.5rem;" :src="require('../image/S14.jpg')" />
				<uL style="position: absolute;top:0.6rem;left: 10rem; line-height: 2.2rem;">
					<li style="color: #2d3333; font-weight:600;">甘肃静宁苹果*6约&nbsp;2斤</li>
					<li><span style="color: #fc362b;">￥30.0</span><span style="color: #bababa;font-size: 0.8rem;">/份</span></li>
					<li>
						<van-progress :percentage="92" color="#fb0301" />
					</li>
					<li style="font-size: 0.6rem;color: #bababa;">
						<van-row type="flex" justify="space-between">
							<van-col span="6" style="width: 45%;">
								<van-icon name="bill-o" size="0.6rem" />&nbsp;已售99999份</van-col>
							<van-col span="6" style="width: 45%;">
								<van-icon name="clock-o" size="0.6rem" />&nbsp;六天内发货</van-col>

						</van-row>
					</li>
				</uL>
			</div>
			<div style="margin-top: 1rem;">
				<van-row gutter="20" type="flex" justify="space-between">
					<van-col span="8" style="color: #2d3333; font-weight:900;">热卖优惠</van-col>
					<van-col span="8" style="color: #bababa; font-size: 0.9rem;">人气热销·大众喜欢</van-col>
				</van-row>
			</div>
		</div>
		<div class="remai">
			<div>
				<van-image width="6rem" height="6rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S6.jpg')" />
				<p align="center">
					<font size="2"><strong>广西新鲜水蜜桃...</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 6%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			<div>
				<van-image width="6rem" height="6rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S1.jpg')" />
				<p align="center">
					<font size="2"><strong>海南新鲜大鸭梨...</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 6%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			<div>
				<van-image width="6rem" height="6rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S2.jpg')" />
				<p align="center">
					<font size="2"><strong>广西北海火龙果...</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 6%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			<div>
				<van-image width="6rem" height="6rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S3.jpg')" />
				<p align="center">
					<font size="2"><strong>广东富贵车厘子...</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 6%;">￥50.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			<div>
				<van-image width="6rem" height="6rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S4.jpg')" />
				<p align="center">
					<font size="2"><strong>广西农家鸭梨...</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 6%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			<div>
				<van-image width="6rem" height="6rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S5.jpg')" />
				<p align="center">
					<font size="2"><strong>广西农家自产柑橘...</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 6%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
		</div>
		<div style="margin-top: 1rem;">
			<van-row gutter="20" type="flex" justify="space-between">
				<van-col span="8" style="color: #2d3333; font-weight:900;">时令上新</van-col>
				<van-col span="8" style="color: #bababa; font-size: 0.9rem;">应季鲜果·优质果园</van-col>
			</van-row>
		</div>
		<div class="shangxin">
			<div style="margin-top: 1rem;">
				<van-card price="25.0/份" desc="果肉细腻,酸甜可口,果香沁人" title="广西草莓*1箱 约500g" :thumb="require('../image/S9.jpg')">
					<template #footer>
						<van-icon name="add-o" color="red" size="1.6rem" />
					</template>
				</van-card>
				<van-card price="25.0/份" desc="果肉细腻,酸甜可口,果香沁人" title="广西葡萄*1箱 约500g" :thumb="require('../image/S10.jpg')">
					<template #footer>
						<van-icon name="add-o" color="red" size="1.6rem" />
					</template>
				</van-card>
			</div>
			<van-divider>为您推荐</van-divider>
			
		
			
		</div>
		<div class="remai2">
			<div>
				<van-image width="10rem" height="10rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S6.jpg')" />
				<p align="center">
					<font size="2"><strong>广西新鲜水蜜桃季节桃花运</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 10%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			
			<div >
				<van-image width="10rem" height="10rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S1.jpg')" />
				<p align="center">
					<font size="2"  ><strong>海南新鲜大鸭梨新鲜解渴</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 10%;">￥25.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			<div style="padding-top: 4rem;">
				<van-image width="10rem" height="10rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S7.jpg')" />
				<p align="center">
					<font size="2"><strong>新鲜李子 酸甜可口</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 10%;">￥35.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
			
			<div style="padding-top: 4rem;">
				<van-image width="10rem" height="10rem" style="margin: 0.4rem 0 0 10%" :src="require('../image/S8.jpg')" />
				<p align="center">
					<font size="2"  ><strong>奇异果 酸酸甜甜定不下来</strong></font>
				</p>
				<p>
					<font color="red" style="margin-left: 10%;">￥20.0</font>
					<font color="#bababa">/份</font>
					<van-icon name="add-o" size="1.2rem" color="red" style="margin-left: 15%;" />
				</p>
			</div>
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
				active: 'home',
			};
		},

	};
</script>

<style scoped>
	.location {
		position: absolute;
		top: 0.8rem;
		left: 1rem;
	}

	.search {
		width: 78%;
		margin: 0 auto;
	}

	.top {
		background: #12191f;
		height: 6rem;
	}

	.poster {
		width: 90%;
		height: 10rem;
		background: #f33d2f;
		border-radius: 0.4rem;
		position: absolute;
		left: 5%;
		top: -2.5rem;
		background: url(../image/1.png);
	}

	.nav {
		width: 90%;
		height: 5rem;
		margin: 8.5rem auto 0;
		text-align: center;
		font-size: 0.8rem;
		color: #fff;
	}

	.news {
		width: 100%;
		height: 2rem;
		margin-top: 1rem;
	}

	.news div {
		float: left;
	}

	.notice-swipe {
		height: 40px;
		line-height: 40px;
	}


	#goods {
		padding-top: 1rem;
		height: 13.8rem;
		margin-top: 0.6rem;
		background: #fff;
		width: 100%;
	}

	.van-col--8 {
		width: 38%;
		padding-left: 6%;
	}

	.goodsCenter {
		height: 8rem;
		border: 0.2rem solid #fafafa;
		position: relative;
		margin: 0.8rem auto 0;
		width: 90%;
		border-radius: 0.4rem;
	}

	.remai {
		height: 22rem;
		margin-top: 0.6rem;
		background: #fff;
		width: 100%;
	}

	.remai div {
		width: 32.7%;
		height: 10.5rem;
		border: 1px solid #fff;
		line-height: 1.5rem;
		float: left;
	}

	.shangxin {
		height: 24rem;
		margin-top: 0.9rem;
		background: #fff;
		width: 100%;
		overflow: hidden;
	}

	.foot .van-tabbar-item--active {
		color: #fc3c2d;
	}
	.remai2 {
		height: 33rem;
		margin-top: -2.6rem;
		background: #fff;
		width: 100%;
	}
	.remai2 div{
		width: 49%;
		height: 10.5rem;
		border: 1px solid #fff;
		line-height: 1.8rem;
		float: left;
	}
</style>

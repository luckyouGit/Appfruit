<template>
	<div>
		<div class="topBg">
			<router-link to="/demo"><van-icon name="arrow-left" style="font-size: 1.5rem;padding: 1.5rem 0 0 2rem;" /></router-link>
		</div>
		<div class="content">
			<div class="content1">
				<div class="time">
					<h3>商品已经在路上＞</h3>
					<van-cell>
						<template #title>
							<span class="custom-title" style="color: #fa0100;">
								<font>12.35</font>
							</span>&nbsp;
							<van-tag type="danger" style="border-radius: 0.4rem 0;background: #FFF;color: #fa0100;border: 1px solid #fa0100;">准时送达</van-tag>
						</template>
					</van-cell>
					<p style="color: #aeaeae; font-size: 0.8rem;">订单配送中&nbsp;感谢您的耐心等待!</p>
				</div>
				<div class="contact">
					<van-image round width="3.5rem" height="3.5rem" :src="require('../image/2.png')" />
					<van-tabbar style="width:2.2rem;height: 2.2rem;position: absolute;bottom: 1.6rem;left: 84%;">
						<van-tabbar-item icon="phone-o">联系</van-tabbar-item>
					</van-tabbar>
					<div style="position: absolute;bottom: 1.4rem;left: 5.6rem;">
						<p style="font-size: 1.1rem; color: #494949;">大马哥</p>
						<p style="font-size: 0.8rem; color: #929292;">快马加鞭的配送小哥</p>
					</div>
				</div>
			</div>
			<div class="goodsInfo">
				
				<van-card num="2" price="50.00" desc="规格:2.5kg/份" title="水蜜桃*6  约5斤装" :thumb="require('../image/S6.jpg')" />
				<van-card num="2" price="70.00" desc="规格:1kg/份" title="李子 约2斤装" :thumb="require('../image/S7.jpg')" />
				<table width="100%" height="30%" style="margin-top: 1.5rem; padding: 0 0.5rem;">
					<tr>
						<td>配送费</td>
						<td align="right">￥0</td>
					</tr>
					<tr>
						<td>优惠</td>
						<td align="right">
							<van-icon name="bill-o" color="red" />￥-10</td>
					</tr>
					<tr>
						<td></td>
						<td align="right">总计￥230.00</td>
					</tr>
				</table>
			</div>
			<div class="logisticsInfo">
				<table width="100%" height="100%" style="padding: 0 0.5rem;">
					<tr>
						<td width="30%">
							<h3>配送信息</h3>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>送达时间</td>
						<td align="right">准时达12.35</td>
					</tr>
					<tr>
						<td>收货地址</td>
						<td align="right">海淀北二街8号中关村SOHO大夏26号小李子(先生)155****662</td>
					</tr>
					<tr>
						<td>配送方式</td>
						<td align="right">准时达</td>
					</tr>
				</table>
			</div>
			<div class="logisticsInfo" style="position: absolute;top: 56rem;left: 3%;">
				<table width="100%" height="80%" style="padding: 0 0.5rem;">
					<tr>
						<td width="30%">
							<h3>订单信息</h3>
						</td>
						<td></td>
					</tr>
					<tr>
						<td>订单号</td>
						<td align="right">660201810263009168</td>
					</tr>
					<tr>
						<td>下单时间</td>
						<td align="right">2018-01-26&nbsp;10.21</td>
					</tr>
					<tr>
						<td>支付方式</td>
						<td align="right">快捷支付</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			document
				.querySelector("body")
				.setAttribute("style", "background-color:#f7f7f7");
		}
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.topBg {
		background: url(../image/3.png);
		height: 8rem;
	}

	.content {
		height: 73rem;
		background: #fff;
		position: relative;
	}

	.content1 {
		width: 92%;
		height: 14rem;
		position: absolute;
		top: -4rem;
		left: 3%;
		border: 2px solid #fafafa;
		background: #fff;
		border-radius: 0.4rem;
	}

	.van-tag--danger {}

	.time {
		text-align: center;
		border-bottom: 1px solid #fafafa;
		padding: 2rem 0 1rem 0;
	}

	.contact {
		padding: 1rem 0 0 1rem;
	}

	.goodsInfo {
		width: 92%;
		height: 26rem;
		position: absolute;
		top: 10.8rem;
		left: 3%;
		border: 2px solid #fafafa;
		background: #fff;
		border-radius: 0.4rem;
	}

	.logisticsInfo {
		width: 92%;
		height: 15rem;
		border: 2px solid #fafafa;
		border-radius: 0.4rem;
		position: absolute;
		top: 38.8rem;
		left: 3%;
	}
</style>

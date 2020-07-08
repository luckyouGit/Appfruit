<template>
	<div>
		<div class="backg">
			<div style="float: left;color: ghostwhite;margin: 2rem 0 0 9rem;size: 0.625rem;">
				<router-link to="/demo">
					<van-icon name="arrow-left" style="float: left;margin-left: -8rem; " />
				</router-link>
				<p>订单已完成 ></p>
				<p style=" margin-left: -2rem;font-size:0.625rem;">感谢您的支持与信任,感谢再次光临</p>
			</div>
		</div>
		<div id="goods">
			<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="冰糖橙  5斤装" :thumb="require('../image/S5.jpg')" />
			<van-card num="1" price="25.0/份" desc="清清脆脆 可口" title="甘肃静宁苹果*6约&nbsp;2斤" :thumb="require('../image/S14.jpg')" />
			<van-card price="35.0/份" desc="肥宅快乐零食" title="橘子干  2斤装" :thumb="require('../image/S12.jpg')" />


			<div class="table1">
				<table width="90%">
					<tr>
						<td>配送费</td>
						<td align="right">￥0</td>
					</tr>
					<tr>
						<td>优惠</td>
						<td align="right"><van-icon name="bill-o" color="red" />￥-10</td>
					</tr>
					<tr>
						<td></td>
						<td align="right">总计￥90.0</td>
					</tr>
				</table>
			</div>

		</div>
		<van-divider style="width: 100%;" />


		<div class="table">
			<table width="90%">
				<tr>
					<th style="width: 4rem;padding-bottom: 1rem;">配送信息</th>
					<td></td>
				</tr>
				<tr>
					<td>送达时间</td>
					<td align="right">准时达 12：18</td>
				</tr>
				<tr>
					<td>配送地址</td>
					<td align="right">xxxxxxx20号
						小李子(先生) 152xxxx9527
					</td>
				</tr>
				<tr>
					<td>配送方式</td>
					<td align="right">准时达</td>
				</tr>
			</table>
			<van-divider style="width: 100%;" />
		</div>
	</div>
</template>

<script>

</script>

<style>
	#goods {
		height: 90%;
		width: 21.4rem;
		margin: 1rem 0 0 1rem;
	}

	.table {
		height: 10rem;
		width: 90%;
		margin: 1rem 0 0 2rem;
	}

	.table1 {
		height: 5rem;
		width: 90%;
		margin: 1rem 0 0 2rem;
	}

	.table1 td {
		margin: 1rem 0 0 0rem;
		font-size: 0.825rem;
	}

	.table td {
		margin: 1rem 0 0 0rem;
		font-size: 0.825rem;
	}

	.backg {
		height: 8rem;
		width: 100%;
		background: url(../image/2.jpg);
	}
</style>

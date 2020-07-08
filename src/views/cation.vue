<template>

	<div class="cation">
		<div>
			<van-search show-action placeholder="请输入搜索关键词">
				<template #action>
					<van-icon name="filter-o" />
				</template>
			</van-search>
		</div>


		<div style="padding-top: 1.25rem;padding-bottom: 2.8rem;">
			<van-tree-select height="45rem" :items="items" :main-active-index.sync="active">
				<template #content>
					<div class="ziti" v-if="active === 0">
						<van-card price="30.0/份" desc="酸酸甜甜根本停不下来" title="海南鸭梨果  5斤装" :thumb="require('../image/S1.jpg')">
							<template #footer>
								<van-icon style="color: red;" name="add-o" />
							</template>
						</van-card>
						<van-card price="25.0/份" desc="红过太阳甜过情人" title="火龙果  5斤装" :thumb="require('../image/S2.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="100.0/份" desc="水果中的劳斯莱斯" title="车厘子  2斤装" :thumb="require('../image/S3.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="25.0/份" desc="本地自产鸭梨" title="鸭梨  5斤装" :thumb="require('../image/S4.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="冰糖橙  5斤装" :thumb="require('../image/S5.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="25.0/份" desc="水蜜桃" title="水蜜桃  5斤装" :thumb="require('../image/S6.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="35.0/份" desc="酸酸甜甜根本停不下来" title="李子  约2斤装" :thumb="require('../image/S7.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>

					<div v-if="active === 1">
						<van-card price="30.0/份" desc="酸酸甜甜根本停不下来" title="海南鸭梨果  5斤装" :thumb="require('../image/S1.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>

					<div v-if="active === 2">
						<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="冰糖橙  5斤装" :thumb="require('../image/S5.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>

					<div v-if="active === 3">
						<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="冰糖橙  5斤装" :thumb="require('../image/S5.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="30.0/份" desc="酸酸甜甜根本停不下来" title="海南鸭梨果  5斤装" :thumb="require('../image/S1.jpg')">
							<template #footer>
								<van-icon style="color: red;" name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 4">
						<van-card price="100.0/份" desc="水果中的劳斯莱斯" title="车厘子  2斤装" :thumb="require('../image/S3.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 5">
						<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="冰糖橙  5斤装" :thumb="require('../image/S5.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 6">
						<van-card price="25.0/份" desc="黄金果肉甜得跟糖似的" title="奇异果  2斤装" :thumb="require('../image/S8.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 7">
						<van-card price="150.0/份" desc="红过太阳甜过情人" title="草莓  5斤装" :thumb="require('../image/S9.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 8">
						<van-card price="20.0/份" desc="酸酸甜甜根本停不下来" title="葡萄  2斤装" :thumb="require('../image/S10.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 9">
						<van-card price="35.0/份" desc="酸酸甜甜根本停不下来" title="李子  5斤装" :thumb="require('../image/S7.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="25.0/份" desc="好吃的不得了" title="李子  5斤装" :thumb="require('../image/S6.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>

					</div>
					<div v-if="active === 10">
						<van-card price="30.0/份" desc="酸酸甜甜根本停不下来" title="海南鸭梨果  5斤装" :thumb="require('../image/S1.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="25.0/份" desc="本地自产鸭梨" title="鸭梨  5斤装" :thumb="require('../image/S4.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 11">
						<van-card price="35.0/份" desc="酸酸甜甜根本停不下来" title="李子  5斤装" :thumb="require('../image/S7.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
					<div v-if="active === 12">
						<van-card price="35.0/份" desc="肥宅快乐零食" title="草莓干  2斤装" :thumb="require('../image/S11.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
						<van-card price="35.0/份" desc="肥宅快乐零食" title="橘子干  2斤装" :thumb="require('../image/S12.jpg')">
							<template #footer>
								<van-icon name="add-o" />
							</template>
						</van-card>
					</div>
				</template>
			</van-tree-select>

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
				active1: 0,
				active: 0,
				items: [{
						text: '今日优惠'
					}, {
						text: '进口鲜果'
					},
					{
						text: '时令鲜果'
					},
					{
						text: '今日鲜果'
					},
					{
						text: '车厘子'
					},
					{
						text: '柑桔橙柚'
					},
					{
						text: '奇异果'
					},
					{
						text: '草莓/蓝莓'
					},
					{
						text: '葡萄/提子'
					},
					{
						text: '桃杏李'
					},
					{
						text: '苹果/梨'
					},
					{
						text: '瓜类'
					},
					{
						text: '果干/零食'
					},
				],
			};
		},

	};
</script>
<style>
	.van-card__desc {
		font-size: 8px;
	}
</style>

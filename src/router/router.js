import Vue from "vue";
import VueRouter from "vue-router";
//引入组件
import home from "../views/home.vue";
import demo from "../views/demo.vue";
import cation from "../views/cation.vue";
import shopping from "../views/shopping.vue";
import footer from "../views/footer.vue";
import complete from "../views/complete.vue";
import distri from "../views/distri.vue";
import all from "../views/all.vue";


//要告诉vue 使用 vuerRouter
Vue.use(VueRouter);
const routes = [{
		path: "/", //默认访问路径
		component: home //组件名称
	},
	{
		path: "/home", //访问路径
		component: home //组件名称
	},
	{
		path: "/demo", //访问路径
		component: demo //组件名称
	},
	{
		path: "/cation", //访问路径
		component: cation //组件名称
	},
	{
		path: "/shopping", //访问路径
		component: shopping //组件名称
	},
	{
		path: "/footer", //访问路径
		component: footer //组件名称
	},
	{
		path: "/complete", //访问路径
		component: complete //组件名称
	},
	{
		path: "/distri", //访问路径
		component: distri //组件名称
	},
	{
		path: "/all", //访问路径
		component: all //组件名称
	},

]
var router = new VueRouter({
	routes
})
export default router;

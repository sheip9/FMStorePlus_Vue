/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createRouter, createWebHashHistory } from "vue-router";
import { useTokenStore as token } from "@/stores/token";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/home/index.vue"),
		},
		{
			path: "/products",
			name: "products",
			component: () => import("../views/products/index.vue"),
		},
		{
			path: "/cart",
			name: "cart",
			component: () => import("../views/cart/index.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/login/index.vue"),
			beforeEnter: () => {
				return token().get() == null;
			},
		},
	],
});

export default router;

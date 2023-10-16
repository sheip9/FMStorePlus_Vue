<script lang="ts" setup>
	import { computed } from "vue";
	import { useRouter } from "vue-router";
	import { useTokenStore as token } from "@/stores/token";
	import { getClaim } from "@/util/JWTUtil";

	const menuItems = [
		{
			name: "首页",
			route: "/",
		},
		{
			name: "商品",
			route: "/products",
		},
		{
			name: "购物车",
			route: "/cart",
		},
	];

	const router = useRouter();
	const isLogin = computed(() => {
		return token().get() != null;
	});
	const getUsername = computed(() => {
		return isLogin.value
			? getClaim(token().get() as string, "username")
			: "未登录";
	});
	const logout = async (): Promise<void> => {
		await router.push("/");
		token().remove();
	};
</script>

<template>
	<el-menu
		:default-active="router.currentRoute.value.fullPath"
		:ellipsis="false"
		mode="horizontal"
		router
	>
		<el-text style="font-size: 25px">FMStore</el-text>
		<div class="flex-grow" />
		<el-menu-item
			v-for="(item, index) in menuItems"
			:key="index"
			:index="item.route"
		>
			{{ item.name }}
		</el-menu-item>
		<div class="flex-grow" />
		<el-sub-menu index="/login">
			<template #title>
				<el-space wrap>
					<el-avatar
						:size="35"
						src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
					/>
					{{ getUsername }}
				</el-space>
			</template>
			<el-menu-item v-if="!isLogin" :index="'/login'">登录</el-menu-item>
			<el-menu-item v-if="!isLogin" :index="'/login?reg'">注册</el-menu-item>
			<el-menu-item v-if="isLogin" @click="logout">登出</el-menu-item>
		</el-sub-menu>
	</el-menu>
</template>

<style scoped>
	.flex-grow {
		flex-grow: 1;
	}
</style>

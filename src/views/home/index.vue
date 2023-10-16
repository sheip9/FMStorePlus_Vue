<script lang="ts" setup>
	import Products from "./products.vue";
</script>

<template>
	<el-carousel height="510px" trigger="click">
		<el-carousel-item v-for="item in 4" :key="item">
			<h3 class="small justify-center">{{ item }}</h3>
		</el-carousel-item>
	</el-carousel>
	<el-space direction="vertical">
		<Products title="最新上架" />
		<Products title="本月最热" />
	</el-space>
</template>

<style scoped></style>

<script setup lang="ts">
	defineProps({
		title: String,
	});
	import ProductCard from "@/components/ProductCard/index.vue";
	import Title from "@/components/Title/index.vue";
</script>

<template>
	<el-space direction="vertical">
		<el-row :gutter="10">
			<el-col :span="24"
				><Title>{{ title }}</Title></el-col
			>
			<el-col :span="24"><el-divider /></el-col>
			<el-col :span="4"><ProductCard /></el-col>
			<el-col :span="4"><ProductCard /></el-col>
			<el-col :span="4"><ProductCard /></el-col>
			<el-col :span="4"><ProductCard /></el-col>
			<el-col :span="4"><ProductCard /></el-col>
			<el-col :span="4"><ProductCard /></el-col>
		</el-row>
		<el-divider />
	</el-space>
</template>

<style scoped></style>

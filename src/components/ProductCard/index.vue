<script setup lang="ts">
	import StarButton from "./star.vue";
	import { computed, CSSProperties } from "vue";
	type Props = {
		style?: CSSProperties | CSSProperties[];
		id: number;
		title: string;
		des: string;
		price: string;
	};
	const props = defineProps<Props>();
	const priceArr = computed(() => {
		return props.price.split(".");
	});
</script>

<template>
	<el-card :body-style="{ padding: '0px' }" :style="style">
		<img
			:alt="title"
			src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
			class="image"
		/>
		<el-row :justify="'center'" style="padding: 14px 0 10px 0">
			<el-col :span="20">
				<el-text size="large" truncated>{{ title }}</el-text>
			</el-col>
			<el-col :span="20">
				<el-text class="text" truncated>{{ des }}</el-text>
			</el-col>
			<el-divider style="margin: 10px 0" />
			<el-col :span="20" style="display: flex; align-items: center">
				<div>
					<el-text class="secondary_text" size="default">￥</el-text>
					<el-text class="primary_text">{{ priceArr[0] }}</el-text>
					<span>.</span>
					<el-text class="secondary_text" size="small">
						{{ priceArr[1] }}
					</el-text>
				</div>
				<div style="flex: 1" />
				<StarButton :active="false" />
			</el-col>
		</el-row>
	</el-card>
</template>

<style scoped>
	.text {
		color: #999;
		height: 51px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		word-break: break-all;
		white-space: normal;
		overflow: clip;
	}

	.image {
		width: 100%;
		display: block;
	}
	.primary_text{
		color: red;
		font-weight: bolder;
		font-size: larger;
	}
	.secondary_text{
		color: gray;
	}
</style>

<script lang="ts" setup>
	import ProductCard from "@/components/ProductCard/index.vue";
	import { queryProducts } from "@/api/item";
	import { ElMessage } from "element-plus";
	import { ref, watch } from "vue";

	type ProductType = {
		id: number;
		name: string;
		des: string;
		price: string;
	};
	const currentPage = ref<number>(0);
	const productArr = ref<ProductType[]>();
	const getProducts = (page: number): void => {
		queryProducts()
			.then((r) => (productArr.value = r.data as ProductType[]))
			.catch((e) => {
				ElMessage.error("服务器错误");
				console.log(e);
			});
	};
	getProducts(currentPage.value);
	watch(currentPage, () => {
		getProducts(currentPage.value);
	});
</script>

<template>
	<el-col>
		<el-space style="width: 100%" wrap>
			<ProductCard
				v-for="item in productArr"
				:id="item.id"
				:key="item.id"
				:des="item.des"
				:price="item.price"
				:title="item.name"
				style="height: 350px; width: 196px"
			/>
		</el-space>
		<el-row>
			<el-col :span="24">
				<el-divider />
			</el-col>
		</el-row>
		<el-row :justify="'center'">
			<el-pagination :total="1000" background layout="prev, pager, next" />
		</el-row>
	</el-col>
</template>

<style scoped></style>

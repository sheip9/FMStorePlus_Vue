<script setup lang="ts">
	import { FormProps, getModel } from "@/components/Form/type";
	import { FormInstance } from "element-plus";
	import { reactive, ref } from "vue";

	const { size, rules, items } = defineProps<FormProps>();
	const formRef = ref<FormInstance>();
	const model = reactive(getModel(items));
	defineExpose({
		model,
	});
</script>

<template>
	<el-space fill :direction="'vertical'" style="width: 100%" size="large">
		<el-row justify="center">
			<slot name="title" />
		</el-row>
		<el-row>
			<el-form
				ref="formRef"
				:model="model"
				style="flex: 1"
				:label-position="'top'"
			>
				<el-form-item
					v-for="(item, index) in items"
					:key="index"
					:label="item.label"
					:prop="item.prop"
					:size="size"
					:label-width="'100px'"
					:rules="rules"
				>
					<el-input v-model="model[item.prop]" :type="item.type" />
				</el-form-item>
				<el-form-item>
					<slot name="action" />
				</el-form-item>
			</el-form>
			<!--			<div style="width: 100px"></div>-->
		</el-row>
	</el-space>
</template>

<style scoped></style>

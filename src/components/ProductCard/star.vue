<script lang="ts" setup>
	import { computed, ref } from "vue";
	import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
	import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
	import { library } from "@fortawesome/fontawesome-svg-core";
	import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
	import { ElMessage } from "element-plus";

	library.add(farStar, fasStar);

	const props = defineProps({
		active: Boolean,
		click: Function,
	});

	const active = ref<boolean>(props.active);
	const getIcon = computed<string>(() => {
		return active.value ? "fa-solid fa-star" : "fa-regular fa-star";
	});
	const getColor = computed<string>(() => {
		return active.value ? "#FFD700" : "";
	});

	const onClick = (): void => {
		if (props.click != null) {
			props.click();
		}
		if (!active.value) {
			ElMessage({
				message: "收藏成功！",
				type: "success",
			});
		} else {
			ElMessage({
				message: "取消收藏。",
			});
		}
		active.value = !active.value;
	};
</script>

<template>
	<el-button circle class="button" text @click="onClick">
		<font-awesome-icon :color="getColor" :icon="getIcon" />
	</el-button>
</template>

<style></style>

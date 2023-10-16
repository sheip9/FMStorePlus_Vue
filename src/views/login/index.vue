<script lang="ts" setup>
	import { loginForm, loginView, regForm, regView } from "@/views/login/data";
	import Form from "@/components/Form/index.vue";
	import Title from "@/components/Title/index.vue";
	import router from "@/router";
	import { computed, ref } from "vue";
	import { AuthParams, getLogin } from "@/api/auth";
	import { useTokenStore } from "@/stores/token";
	import { ElMessage } from "element-plus";
	import { AxiosError } from "axios";

	const formRef = ref();
	const loading = ref<boolean>(false);
	const formData = computed(() => {
		return "reg" in router.currentRoute.value.query ? regForm : loginForm;
	});
	const viewData = computed(() => {
		return "reg" in router.currentRoute.value.query ? regView : loginView;
	});
	const handleLogin = async (): Promise<void> => {
		loading.value = true;
		const params: AuthParams = {
			username: formRef.value.model.username,
			password: formRef.value.model.password,
		};
		try {
			const token: string = (await getLogin(params)).data;
			useTokenStore().set(token);
			ElMessage.success("登录成功！");
		} catch (e) {
			const error = e as AxiosError;
			switch (error.response?.status) {
				case 401:
					ElMessage.error("登录失败!");
					break;
				case 500:
					ElMessage.error("服务器错误!");
			}
			console.log(e);
		}
		loading.value = false;
	};
</script>

<template>
	<el-row justify="center">
		<div style="width: 320px">
			<div class="full_width" style="height: 20vh"></div>
			<Form ref="formRef" :items="formData.items" :size="'large'">
				<template #title>
					<Title>{{ viewData.title }}</Title>
				</template>
				<template #action>
					<el-space class="full_width" fill>
						<el-button
							:loading="loading"
							size="large"
							type="primary"
							@click="handleLogin()"
						>
							{{ viewData.okBtn }}
						</el-button>
						<router-link :to="viewData.rdPath" class="full_width">
							<el-button class="full_width" size="large">
								{{ viewData.rdBtn }}
							</el-button>
						</router-link>
					</el-space>
				</template>
			</Form>
		</div>
	</el-row>
</template>

<style scoped>
	.full_width {
		width: 100%;
	}
</style>

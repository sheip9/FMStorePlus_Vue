<template>
	<div class="common-layout">
		<el-container style="min-height: 100vh">
			<el-header>
				<Header />
			</el-header>
			<el-main>
				<el-row :justify="'center'">
					<el-col :justify="'center'" :span="16">
						<slot />
					</el-col>
				</el-row>
			</el-main>
			<el-footer style="background: #ececec"></el-footer>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
	import Header from "./header/index.vue";
</script>

<style scoped></style>

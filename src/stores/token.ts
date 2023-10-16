import { ref } from "vue";
import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", () => {
	const token = ref<string | null>(localStorage.getItem("token"));
	const get = (): string | null => token.value;
	const set = (newToken: string): void => {
		token.value = newToken;
		localStorage.setItem("token", newToken);
	};
	const remove = (): void => {
		token.value = null;
		localStorage.removeItem("token");
	};

	return { get, set, remove };
});

import { FormProps } from "@/components/Form/type";

type ViewData = {
	title: string;
	okBtn: string;
	rdBtn: string;
	rdPath: string;
};
const loginView: ViewData = {
	title: "登录",
	okBtn: "登录",
	rdBtn: "未有账号？前往注册",
	rdPath: "/login?reg",
};
const regView: ViewData = {
	title: "注册",
	okBtn: "注册",
	rdBtn: "已有账号？前往登录",
	rdPath: "/login",
};
const loginForm: FormProps = {
	items: [
		{
			label: "用户名",
			prop: "username",
			type: "text",
		},
		{
			label: "密码",
			prop: "password",
			type: "password",
		},
	],
};
const regForm: FormProps = {
	items: [
		{
			label: "用户名",
			prop: "username",
			type: "text",
		},
		{
			label: "密码",
			prop: "password",
			type: "password",
		},
		{
			label: "密码",
			prop: "rePassword",
			type: "password",
		},
	],
};
export { loginForm, regForm, loginView, regView };

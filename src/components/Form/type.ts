import { FormItemRule, FormRules } from "element-plus";
import { Arrayable } from "element-plus/es/utils";

type FormProps = {
	size?: "" | "large" | "default" | "small";
	rules?: FormRules;
	items: FormItemProps[];
};
type FormItemProps = {
	label: string;
	prop: string;
	rules?: Arrayable<FormItemRule>;
	error?: string;
	type:
		| "text"
		| "textarea"
		| "password"
		| "button"
		| "checkbox"
		| "file"
		| "number"
		| "radio";
};
type FormModel = {
	[idx: string]: string;
};
const getModel = (items: FormItemProps[]): FormModel => {
	const model: FormModel = {};
	for (const item of items) {
		model[item.prop] = "";
	}
	return model;
};
export { FormProps, getModel };

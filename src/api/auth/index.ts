import axios, { AxiosResponse } from "axios";

enum Api {
	login = "/api/login",
}

type AuthParams = {
	username: string;
	password: string;
};
const getLogin = (params: AuthParams): Promise<AxiosResponse> => {
	return axios.get(Api.login, {
		params,
	});
};
export { getLogin, AuthParams };

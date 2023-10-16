import axios, { AxiosResponse } from "axios";

enum Api {
	query = "/api/query",
}

const queryProducts = (): Promise<AxiosResponse> => {
	return axios.get(Api.query);
};

export { queryProducts };

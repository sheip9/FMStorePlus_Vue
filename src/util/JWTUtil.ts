import jwtDecode from "jwt-decode";

const getClaim = (token: string, claim: string): string => {
	return jwtDecode(token)[claim] as string;
};

export { getClaim };

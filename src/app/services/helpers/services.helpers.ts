import { getEnvVariable } from "../../../environment/environment";

export const getServiceUrl = (_envVariable: string): string => {
    return getEnvVariable("API_URL");
};

export const getCommentsUrl = (_envVariable: string): string => {
    return getEnvVariable("OTRA_ENV");
};

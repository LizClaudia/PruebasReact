import { getEnvVariable } from "../../../environment/environment"

export const getServiceUrl = (envVariable:string): string => getEnvVariable("API_URL");
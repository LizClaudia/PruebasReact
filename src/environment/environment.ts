type EnvVariableKey = "API_URL";
export interface EnvVariable {
    name: string;
    value: string;
}
declare global {
    interface Window {
        env: Record<EnvVariableKey, string>;
    }

    interface EnvVariable {
        name: string;
        value: string;
    }
}
/**
 * Gets an environment variable value, using the right source
 * @param {EnvVariableKey} envVariable Environment variable name
 * @return {String} Environment variable value
 */

export const getEnvVariable = (envVariable: EnvVariableKey): string => {
    window.env = { API_URL: "https://jsonplaceholder.typicode.com/posts" };

    return window?.env?.[envVariable] ?? import.meta.env[`VITE_${envVariable}`];
};

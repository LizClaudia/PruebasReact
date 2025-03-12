module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:cypress/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
        "standard",
        "eslint-config-prettier",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        process: true,
        global: true,
        module: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
        react: {
            version: "detect", // to detect the reactjs version
        },
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
    ignorePatterns: ["dist/"],
};

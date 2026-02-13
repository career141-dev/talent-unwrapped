import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
    {
        ignores: ["dist/**", "node_modules/**", "build/**"],
    },
    js.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,tsx}"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-constant-condition": "warn",
            "no-empty": "warn",
            "no-empty-pattern": "warn",
            "no-useless-escape": "warn",
            "no-console": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-empty-object-type": "warn",
            "@typescript-eslint/no-empty-function": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/no-unescaped-entities": "warn",
            "react/display-name": "warn",
            "jsx-a11y/no-static-element-interactions": "warn",
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/no-noninteractive-element-interactions": "warn",
            "jsx-a11y/anchor-is-valid": "warn",
        },
    },
];

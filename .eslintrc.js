module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier"
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		indent: ["warn", "tab"],
		"prettier/prettier": ["warn", { useTabs: true, trailingComma: "none" }],
		"vue/multi-word-component-names": 0
	}
};

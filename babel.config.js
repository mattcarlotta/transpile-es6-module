const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

const readDirectory = path =>
	readdirSync(path).reduce((acc, folder) => {
		const dirPath = `${path}/${folder}`;
		if (statSync(resolve(dirPath)).isDirectory()) {
			acc[`~${folder.replace(/[^\w\s]/gi, "")}`] = dirPath;
		}

		return acc;
	}, {});

module.exports = api => {
	api.cache(true);

	const alias = readDirectory("./src");

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					useBuiltIns: "entry",
					corejs: { version: 3, proposals: true },
				},
			],
			"@babel/preset-react",
		],
		plugins: [
			["module-resolver", { alias }],
			"@babel/plugin-transform-runtime",
			["@babel/plugin-proposal-decorators", { legacy: true }],
			"@babel/plugin-syntax-dynamic-import",
			["@babel/plugin-proposal-class-properties", { loose: true }],
			"lodash",
		],
	};
};

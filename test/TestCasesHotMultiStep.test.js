const { describeCases } = require("./TestCases.template");
const Stats = require("../lib/Stats");
const webpack = require("../lib/webpack");

describe("TestCases", () => {
	describeCases({
		name: "hot-multi-step",
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multiStep: true
			})
		]
	});
});

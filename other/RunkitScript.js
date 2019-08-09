// example url for Shields: https://untitled-noopow1jds3m.runkit.sh/?type=lines
const endpoint = require("@runkit/runkit/json-endpoint/1.0.0");
const request = require("request"); // peer dependency
const requestPromise = require("request-promise");
const queryTypes = ["lines", "functions", "statements", "branches"];
const url =
	"https://raw.githubusercontent.com/nodes777/flower-game-phaser3/master/coverage/coverage-summary.json";

endpoint(module.exports, async function(req) {
	try {
		var unparsed = await requestPromise(url);
		var json = JSON.parse(unparsed);
	} catch (e) {
		return { error: "Runkit could not retrieve page" };
	}

	const queryType = req.query.type;
	const formattedLabel = queryType + " coverage";

	if (queryTypes.includes(queryType)) {
		const percentage = json.total[queryType].pct + "%";
		return {
			schemaVersion: 1,
			label: formattedLabel,
			message: percentage,
			color: "orange"
		};
	} else {
		return {
			schemaVersion: 1,
			label: "You need a valid queryType",
			message: queryType,
			color: "red"
		};
	}
});

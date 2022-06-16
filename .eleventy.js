const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (config) {
	//--- Plugins
	config.addPlugin(eleventyNavigationPlugin);

	//--- Misc Options
	// Additional files to watch for changes
	config.addWatchTarget("./eleventy/");

	// //--- Adds admin page from Forestry
	config.addPassthroughCopy("admin");

	//--- Adds CSS to _site
	config.addPassthroughCopy({ "src/assets/css": "css" });

	//--- Adds JS to _site
	config.addPassthroughCopy({ "src/assets/js": "js" });

	//--- Adds Images to _site
	config.addPassthroughCopy({ "src/assets/img": "img" });

	//--- Adds Fonts to _site
	config.addPassthroughCopy({ "src/assets/fonts": "fonts" });

	return {
		pathPrefix: "/", // useful for GitHub pages
		dir: {
			input: "./",
			output: "_site",
			includes: "src/includes",
			layouts: "src/layouts",
			data: "src/data"
		}
	};
}
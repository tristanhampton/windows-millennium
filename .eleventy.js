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

	//--- Dump filter
	config.addFilter('dump', (value) => {
		if (value) {
			const postData = value.map((post) => {
				return {
					date: post.date,
					url: post.url,
					data: {
						title: post.data.title,
						excerpt: post.data.excerpt,
					},
				};
			});

			return JSON.stringify({
				collections: {
					post: postData,
				},
			}, null, 2);
		} else {
			return value;
		}

	});

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
module.exports = function (eleventyConfig) {
   
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/admin");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addWatchTarget("./src/images/");

    eleventyConfig.addFilter("transformMediaPath", function (path) {
      return path.replace(/^src\//, "/");
    });
    
    eleventyConfig.addFilter("formatDate", function (date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options).replace(/-/g, ' ');
      });
   
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };
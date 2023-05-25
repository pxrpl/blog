module.exports = function (eleventyConfig) {
  
 
  eleventyConfig.addPassthroughCopy("src/css/")
  eleventyConfig.addPassthroughCopy("src/images/")
  eleventyConfig.setTemplateFormats("html,njk");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
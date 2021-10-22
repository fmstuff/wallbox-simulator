var ghpages = require("gh-pages");

ghpages.publish("dist", () => {
  console.log("Deploy Complete!");
});

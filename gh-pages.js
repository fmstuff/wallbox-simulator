import { publish } from "gh-pages";

publish("dist", () => {
  console.log("Deploy Complete!");
});

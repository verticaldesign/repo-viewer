import dataFetch from "./dataFetcher.js";
import { populateRepoList } from "./populateRepoList.js";

const dataURL = "https://api.github.com/users/verticaldesign/repos";

let repoList = [];
dataFetch(dataURL).then(repoList => {
    populateRepoList(repoList);
});

export default () => {
  console.log("test5");
};

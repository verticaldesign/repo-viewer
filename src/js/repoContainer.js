import dataFetch from "./dataFetcher.js";
import { populateRepoList } from "./populateRepoList.js";

export default () => {
  let containerDiv = document.createElement("div");
  containerDiv.innerHTML = "Text";

  const dataURL = "https://api.github.com/users/verticaldesign/repos";
  dataFetch(dataURL).then(repoList => {
    containerDiv.appendChild(populateRepoList(repoList));
    document.querySelector("body").appendChild(containerDiv);
  });
  //console.log("build");
};

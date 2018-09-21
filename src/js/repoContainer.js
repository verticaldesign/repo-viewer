import dataFetch from "./dataFetcher.js";
import { populateRepoList } from "./populateRepoList.js";
import searchBar from "./searchBar.js";

export default () => {
  let containerDiv = document.createElement("div");
  let resultsContainer = document.createElement("div");
  resultsContainer.setAttribute("id", "resultDiv");

  containerDiv.appendChild(searchBar());
  containerDiv.appendChild(resultsContainer);

  //const theInput = document.querySelector('#searchInput');

  
  //   dataFetch(dataURL).then(repoList => {
  //     //containerDiv.appendChild(populateRepoList(repoList));
  //     document.querySelector("body").appendChild(containerDiv);
  //     });
  document.querySelector("body").appendChild(containerDiv);
  //console.log("build");
};

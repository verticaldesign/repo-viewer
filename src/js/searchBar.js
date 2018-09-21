import { populateRepoList } from "./populateRepoList.js";
import dataFetch from "./dataFetcher.js";

export default () => {
  let searchContainer = document.createElement("form");
  let searchInput = document.createElement("input");
  //const DATAURL = "https://api.github.com/users/verticaldesign/repos";

  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("id", "searchInput");
  let searchButton = document.createElement("button");

  searchButton.innerHTML = "Search";

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  searchContainer.addEventListener("submit", e => {
    e.preventDefault();
    let resultContainer = document.querySelector("#resultDiv");
    let searchParameters = document.querySelector("#searchInput").value;

    resultContainer.innerHTML = "";
    dataFetch(searchParameters).then(repoList => {
      resultContainer.appendChild(populateRepoList(repoList));
    });
  });

  //console.log(searchContainer);
  return searchContainer;
};

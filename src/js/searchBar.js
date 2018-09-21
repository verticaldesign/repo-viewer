export default () => {
  let searchContainer = document.createElement("div");
  let searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  //searchInput.classList('')
  let searchButton = document.createElement("button");

  searchButton.innerHTML = "Search";

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);

  console.log(searchContainer);
  return searchContainer;
};

export function populateRepoList(repoList) {
  //console.table(repoList);
  let simplifiedList = [...repoList].map(repo => {
    return repo.name;
  });
  let list = document.createElement("ul");

  simplifiedList.map(row => {
    let newRow = document.createElement("li");
    newRow.innerHTML = `${row}`;
    list.appendChild(newRow);
  });
  console.log(list);
  return list;
  console.table(simplifiedList);
}

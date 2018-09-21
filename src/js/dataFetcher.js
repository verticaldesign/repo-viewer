export default search => {
  const dataURL = "https://api.github.com/users/"; //verticaldesign/repos";
  //return fetch(`${dataURL}${search}/repos?authorization_request=${token}`)
  return fetch(`${dataURL}${search}/repos`)
    .then(data => data.json())
    .then(data => {
      if (data.message) {
        console.error("error");
      } else {
        return data;
      }
    })
    .catch(e => console.error("error fetching data"));
};

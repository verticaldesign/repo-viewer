
export default url => {
  return fetch(url)
    .then(data => data.json())
    .catch(() => console.error("error fetching data"));
};

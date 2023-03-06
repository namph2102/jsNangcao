async function fetchData(id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await res.json();
  return data;
}
export default fetchData;

try {
  getData("src/dados.json");
} catch (err) {
  console.log(err);
}

async function getData(url) {
  const result = await fetch(url);
  const response = await result.json();
  console.log(response);
}

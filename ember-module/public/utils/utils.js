console.log('utils.js');

async function getMyModelData() {
  let response = await fetch('/api/text-input/');
  let data = await response.json();
  return data;
}

console.log(getMyModelData());

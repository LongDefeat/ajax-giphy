/*=========Elements=========*/

const $searchInput = $("#searchInput");
const $btn = $("#searchBtn");
const $gifContainer = document.querySelector("#gifContainer");

/*============Add Gif============*/
function addGifToPage(res) {
  const ul = document.querySelector("#gifs");
  const newLI = document.createElement("LI");
  const img = document.createElement("img");
  let randomIdx = Math.floor(Math.random() * res.data.length);
  img.src = res.data[randomIdx].images.original.url;
  //   newLI.innerHTML += `${res.data}`;
  newLI.append(img);
  ul.append(newLI);
}
// EXAMPLE
// function makeLaunchLI(launch) {
//     const newLI = document.createElement("LI");
//     const mission = document.createElement("B");
//     mission.innerText = launch.mission_name;
//     newLI.append(mission);
//     newLI.innerHTML += ` - Rocket: ${launch.rocket.rocket_name} - ${launch.details}`;
//     return newLI;
//   }

/*=========Form=================*/
$("form").on("submit", async function searchGif(evt) {
  evt.preventDefault();

  let searchVal = $searchInput.val();
  $searchInput.val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchVal, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  addGifToPage(res.data);
  console.log(res.data);
});

$("#remove").on("click", () => {
  const $gifContainer = document.querySelector("#gif-container");
  $gifContainer.empty();
});

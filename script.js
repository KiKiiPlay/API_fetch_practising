const getContainer = document.querySelector(".row");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43edf00e99mshe81faf3a369e73ap1a437ajsn69393cce9cd3",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=pink floyd",
  options
)
  .then((response) => response.json())
  .then((pinkfloyd) => {
    console.log(pinkfloyd.data);
    for (data of pinkfloyd.data) {
      getContainer.innerHTML += `<div class="col-3">
      <div class="card">
  <img src="${data.album.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.artist.name}</h5>
    <p class="card-text">Title: ${data.title}</p>
  </div>
</div>
      </div>`;
    }
  })
  .catch((err) => console.error(err));

const getContainer = document.querySelectorAll(".row");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43edf00e99mshe81faf3a369e73ap1a437ajsn69393cce9cd3",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=rammstein",
  options
)
  .then((response) => response.json())
  .then((rammstein) => {
    console.log(rammstein.data);
    for (data of rammstein.data) {
      getContainer[0].innerHTML += `<div class="col-3">
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

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
  options
)
  .then((response) => response.json())
  .then((metallica) => {
    console.log(metallica.data);
    for (data of metallica.data) {
      getContainer[1].innerHTML += `<div class="col-3">
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

fetch(
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=pink floyd",
  options
)
  .then((response) => response.json())
  .then((pink_floyd) => {
    console.log(pink_floyd.data);
    for (data of pink_floyd.data) {
      getContainer[2].innerHTML += `<div class="col-3">
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

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
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>`;
    }
  })
  .catch((err) => console.error(err));

const productsDiv = document.querySelector(".products");

const url = "https://jsonplaceholder.typicode.com/photos";
let data = [];

async function fetchData() {
  try {
    const response = await fetch(url);
    data = await response.json();
    data = data.slice(0, 100);
    if (data) loadData();
  } catch (error) {
    console.error(error);
  }
}

fetchData();

let start = 0;
let limit = 9;
let ifLoading = false;

const loadData = () => {
  if (ifLoading) return;

  ifLoading = true;

  let div = "";
  let actualData = data.slice(start, limit);
  actualData.forEach((item) => {
    div += `<div class="card">
          <img src="${item.thumbnailUrl}" alt="img-${item.id}" />
          <p>${item.title}</p>
        </div>`;
  });
  ifLoading = false;
  productsDiv.innerHTML += div;
  if (limit > 100) ifLoading = true;
  start += 9;
  limit += 9;
};

window.addEventListener("scroll", () => {
  let bottom = productsDiv.getBoundingClientRect().bottom;
  let windowHeight = window.innerHeight;
  if (data && bottom < windowHeight) loadData();
});

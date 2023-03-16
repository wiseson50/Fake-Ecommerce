 console.log(data);

// function printmyData(info) {
//   console.log(info)
// }

// function myFetch() {
// let url =('https://fakestoreapi.com/products')
// fetch(url).then((response) => {
//   return response.json();
// })
// .then((result) => {
//  console.log(result) ; 
//  let data = result
//  printmyData(data)
// })


// }
// myFetch()


let myContainer = document.getElementById("card-container");
for (let i = 0; i < data.length; i++) {
  let divCard = document.createElement("div");
  divCard.setAttribute("style", "width: 18rem");
  divCard.setAttribute("class", "col-sm-12 col-md-6 col-lg-4");
  divCard.classList.add("card");
  divCard.classList.add("text-bg-primary");

  let img = document.createElement("img");
  img.setAttribute("src", data[i].image);
  img.setAttribute("alt", data[i].title);
  img.classList.add("card-img-top");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.innerText = data[i].price;

  let p = document.createElement("p");
  p.classList.add("card-text");
  p.innerText = data[i].title;

  cardBody.appendChild(h5);
  divCard.appendChild(p);

  divCard.appendChild(cardBody);
  myContainer.appendChild(divCard);
  divCard.appendChild(img);
}



function openTab(tabName) {
  var x = document.getElementsByClassName("tab");

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
function allItem() {
  document.getElementById("breakFast").style.display = "block";
  document.getElementById("lunch").style.display = "block";
  document.getElementById("dinner").style.display = "block";
  document.getElementById("drink").style.display = "block";
  document.getElementById("other").style.display = "block";
}

//   adding data into localstorage
const addToCart = document.getElementsByClassName("btn");
// console.log(addToCart.length);       //cart button length (16)
let products = [];

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function (e) {
    // console.log(e.target.parentElement.children[2].children[1].textContent)   //which elem we are target that child element
    // console.log(i+1+" "+e.target)
    if (typeof Storage !== "undefined") {
      var image = document.querySelectorAll(".card-body img");
      let product = {
        //check parent

        Image: image[i].getAttribute("src"),
        name: e.target.parentElement.children[0].textContent, // 0 index element of addToCart btn
        price: e.target.parentElement.children[2].children[1].textContent, // 2 index element of addToCart btn and it's 1 index children
        id: i + 1, // id is incrementing
        no: 1,
      };
      if (JSON.parse(localStorage.getItem("products")) === null) {
        products.push(product); // push product push in array product
        localStorage.setItem("products", JSON.stringify(products));
        window.location.reload(); // product add window is reload
      } else {
        const localProduct = JSON.parse(localStorage.getItem("products"));
        localProduct.map((data) => {
          // add in data in local stroage throw the map
          if (product.id == data.id) {
            product.no = data.no + 1;
          } else {
            products.push(data); 
          }
        });
        products.push(product);// push the data in products array
        localStorage.setItem("products", JSON.stringify(products));
        window.location.reload();
      }
    } else {
      console.log("storage is not working");
    }
  });
}

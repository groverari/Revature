const user = JSON.parse(localStorage.getItem("user"));

const url = "http://localhost:8080/";
let books = [];

const products = fetch(url + "products")
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    books = body;
  })
  .then(() => {
    const bookHTML = books

      .map((book) => {
        return `<div class="book">
                    <img class="book-img" src="../assets/${book.img}" 
                        alt="the cover of ${book.product_name}"/>
                    <h3 class="book-title" >${book.product_name}</h3>
                    <span class="price" >$${book.price}</span>
                    <p class="info">${book.info}</p>
                    <div class="btn-group">
                        <button class="book-btn" onclick="addToCart(${book.id})">
                            Add to Cart
                        </button>
                        <button class="book-btn" onclick="moreInfo(${book.id})">
                            More Info
                        </button>
                    </div>
                </div>`;
      })
      .join("");

    document.getElementById("products").innerHTML = bookHTML;
  });

async function addToCart(product_id) {
  let data = {
    user_id: user.id,
    product_id: product_id,
    quantity: 1,
  };
  console.log(data);

  let res = await fetch(url + "addToCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  data = await res.json();
  console.log(data);

  document.getElementById(
    "content"
  ).innerHTML = `Successfully added to your cart`;
  openModal();
}

function moreInfo(product_id) {
  window.location.assign(`../product/product.html?product_id=${product_id}`);
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

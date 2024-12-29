let productcard = document.querySelectorAll(".product-card"),
  productDetails = document.getElementById("product-details"),
  productImg = document.getElementById("detail-img"),
  productName = document.getElementById("product-name"),
  productDiscription = document.getElementById("product-discription"),
  productPrice = document.getElementById("product-price");

productcard.forEach((card) => {
  const btn = card.querySelector(".details-btn");

  btn.addEventListener("click", () => {
    const imgsrc = card.querySelector(".product-img").src;
    const name = card.dataset.name;
    const price = card.dataset.price;
    const discription = card.dataset.discription;

    productName.textContent = name;
    productDiscription.textContent = discription;
    productPrice.textContent = price;
    productImg.src = imgsrc;

    productDetails.style.display = "block";
  });
});

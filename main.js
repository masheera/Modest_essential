const b1 = document.getElementById("b1");
b1.onclick = function()
{
    window.location.href="product.html";
    // window.open("product.html", "_blank");
}
const abaya = document.getElementById("abaya")
abaya.onclick = function()
{
      window.open("product.html", "_blank");
}
const dress = document.getElementById("dress")
dress.onclick = function()
{
      window.open("product2.html", "_blank");
}
// const cart =document.getElementById("cart");
// cart.onclick = addDivToPageB();
// //  cart.onclick = function()
// // {
// //       console.log("Added to cart");
// // }

// function addDivToPageB() {
//       // Create a new div
//       const newDiv = document.createElement('div');
//       newDiv.textContent = 'This is the dynamically added div!';

//       // Append the new div to the target div on Page B
//       const targetDiv = document.getElementById('targetDiv');
//       targetDiv.appendChild(newDiv);
//   }
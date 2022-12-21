const request = require("supertest");
const app = require("../app.js");
const addData = require("../js/list.js");

const generaltest = async() => {
  const res = await request(app).get("/");
  document.body.innerHTML = res.text;
  
  const prices = await document.querySelectorAll(".price");
  const name = await document.getElementById("item-name-input");
  const qty = await document.getElementById("item-qty-input");
  const cost = await document.getElementById("item-price-input");
  const button = await document.querySelector("#add");
  let grandtotal = 0;
  prices.forEach(price => {
    const val = parseInt(price.textContent);
    if(!Number.isNaN(val)){
      grandtotal += val;
    }
  })
  button.addEventListener('click',addData);
  const totalSumRow = await document.querySelector("#total");
  const price = totalSumRow.innerHTML;
  expect(price).toBe(`Total Ammount is ${grandtotal} $`);
}
test("Testing the Total Price", async() => await generaltest());

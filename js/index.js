// Dynamically add student id and name
const studentID = document.querySelector("#studentID");
const showStudentID = document.querySelector("#showStuBtn");

// Add event listener to put name and student ID into p tag
showStudentID.addEventListener("click", function () {
  studentID.textContent = "200530585 Seahee Hong";
});

// Variable
const form = document.querySelector("form");

// Class for the Pizza Object
const checkOrder = document.querySelector("#checkMyOrder");

class Pizza {
  // Constructor
  constructor(
    pizzaType,
    pizzaSize,
    crustType,
    sauce,
    topping,
    customerName,
    phoneNum,
    address
  ) {
    this.pizzaType = pizzaType;
    this.pizzaSize = pizzaSize;
    this.crustType = crustType;
    this.sauce = sauce;
    this.topping = topping;
    this.customerName = customerName;
    this.phoneNum = phoneNum;
    this.address = address;
  }

  // Method
  confirmOrder() {
    checkOrder.innerHTML = `
      <ul>
        <li>Order Name : ${this.customerName}</li>
        <li>Contact : ${this.phoneNum}</li>
        <li>Address: ${this.address}</li>
      </ul>
      <ul>
        <li>Pizza Type : ${this.pizzaType}</li>
        <li>Pizza Size : ${this.pizzaSize}</li>
        <li>Crust Type : ${this.crustType}</li>
        <li>Sauce : ${this.sauce}</li>
        <li>Topping : ${this.topping}</li>
      </ul>
      `;
  }
}

// Event Listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var pizzaType = document.getElementById("pizzaType").value;
  var pizzaSize = document.getElementById("pizzaSize").value;
  var crustType = document.getElementById("crustType").value;

  var sauces = [];
  var sauceSelect = document.querySelectorAll('input[name="sauce"]:checked');
  sauceSelect.forEach(function (selected) {
    sauces.push(selected.nextElementSibling.innerText);
  });

  var toppings = [];
  var toppingSelect = document.querySelectorAll(
    'input[name="topping"]:checked'
  );
  toppingSelect.forEach(function (selected) {
    toppings.push(selected.nextElementSibling.innerText);
  });

  var customerName = document.getElementById("name").value;
  var phoneNum = document.getElementById("phoneNum").value;
  var address = document.getElementById("address").value;

  // validate pizza order form
  if (sauces === null) {
    alert("Please select sauces");
  } else if (toppings === null) {
    alert("Please select toppings");
  } else if (customerName === "") {
    alert("Please enter your name");
  } else if (phoneNum === "") {
    alert("Please enter your phone number");
  } else if (address === "") {
    alert("Please enter your address");
  } else {
    var pizzaOrder = new Pizza(
      pizzaType,
      pizzaSize,
      crustType,
      sauces,
      toppings,
      customerName,
      phoneNum,
      address
    );
    pizzaOrder.confirmOrder();
    console.log(pizzaOrder.confirmOrder());
  }
});

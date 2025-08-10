// Get radio elements
const lettuceradio = document.getElementById("lettuce-radio");
const tomatoradio = document.getElementById("tomato-radio");
const cheeseradio = document.getElementById("cheese-radio");
const baconradio = document.getElementById("bacon-radio");

// Get burger fillings element
const fillings = document.getElementById("fillings");

// Update burger fillings based on lettuce selection (show/hide)
lettuceradio.addEventListener("change", function () {
  if (lettuceradio.checked) {
    fillings.style.display = "block";
  }
});

// Tomato changes background color
tomatoradio.addEventListener("change", function () {
  if (tomatoradio.checked) {
    fillings.style.backgroundColor = "red";
  }
});

// Cheese changes background color
cheeseradio.addEventListener("change", function () {
  if (cheeseradio.checked) {
    fillings.style.backgroundColor = "#ffd700";
  }
});

// Bacon changes background color
baconradio.addEventListener("change", function () {
  if (baconradio.checked) {
    fillings.style.backgroundColor = "#8b4513";
  }
});


// Collect selected burger options
function customizeBurger() {
  const selectedBun = document.getElementById("bunSelect").value;
  const selectedProtein = document.getElementById("proteinSelect").value;
  const selectedCheese = document.getElementById("cheeseSelect").value;

  // Each group of radio buttons must have unique "name" attributes!
  const selectedTopping = document.querySelector('input[name="topping"]:checked')?.value || "";
  const selectedSauce = document.querySelector('input[name="sauce"]:checked')?.value || "";
  const selectedExtra = document.querySelector('input[name="extra"]:checked')?.value || "";

  const customBurger = {
    bun: selectedBun,
    protein: selectedProtein,
    cheese: selectedCheese,
    topping: selectedTopping,
    sauce: selectedSauce,
    extra: selectedExtra
  };

  console.log(customBurger);
}

// Format currency (INR)
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);
}

// Prevent form submit
function submitForm(e) {
  e.preventDefault();
}

// Calculate total for radio buttons
function calculateTotal() {
  const form = document.getElementById("burger-form");
  const radios = form.querySelectorAll("input[type='radio']");
  let totalPrice = 0;

  radios.forEach(radio => {
    if (radio.checked) {
      totalPrice += parseFloat(radio.value);
    }
  });

  document.getElementById("total-price").innerText = formatCurrency(totalPrice);
}



// Select the toggle switch
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", updatePrices);

function updatePrices() {
  // Select the price elements 
  const price1 = document.getElementById("price1");
  const price2 = document.getElementById("price2");
  const price3 = document.getElementById("price3");

  
  price1.textContent = toggleSwitch.checked ? "19.99" : "199.99";
  price2.textContent = toggleSwitch.checked ? "24.99" : "249.99";
  price3.textContent = toggleSwitch.checked ? "39.99" : "399.99";
}




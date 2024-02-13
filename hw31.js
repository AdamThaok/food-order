//buss logic

function verifyOrder() {
  alert();

  // Foods selected
  var food1 = document.getElementById("food1").checked;
  var food2 = document.getElementById("food2").checked;
  var food3 = document.getElementById("food3").checked;
  var food4 = document.getElementById("food4").checked;
  var food5 = document.getElementById("food5").checked;

  // Amount of food
  var food1_q = document.getElementById("food1_q").value;
  var food2_q = document.getElementById("food2_q").value;
  var food3_q = document.getElementById("food3_q").value;
  var food4_q = document.getElementById("food4_q").value;
  var food5_q = document.getElementById("food5_q").value;

  // Salads selected
  var salad1 = document.getElementById("salad1").checked;
  var salad2 = document.getElementById("salad2").checked;
  var salad3 = document.getElementById("salad3").checked;
  var salad4 = document.getElementById("salad4").checked;
  var salad5 = document.getElementById("salad5").checked;

  // Amount of salad
  var salad1_q = document.getElementById("salad1_q").value;
  var salad2_q = document.getElementById("salad2_q").value;
  var salad3_q = document.getElementById("salad3_q").value;
  var salad4_q = document.getElementById("salad4_q").value;
  var salad5_q = document.getElementById("salad5_q").value;

  if (
    !(
      food1 ||
      food2 ||
      food3 ||
      food4 ||
      food5 ||
      salad1 ||
      salad2 ||
      salad3 ||
      salad4 ||
      salad5
    )
  )
    alert("Please select at least one item.");
  //alert massage when a input is invalid
  else {
    //set order
    var order = "";

    order = constructOrder(
      food1,
      food2,
      food3,
      food4,
      food5,
      food1_q,
      food2_q,
      food3_q,
      food4_q,
      food5_q,
      salad1,
      salad2,
      salad3,
      salad4,
      salad5,
      salad1_q,
      salad2_q,
      salad3_q,
      salad4_q,
      salad5_q
    );
    
    processInfo(name, lastName, phone, order);
  }
}

// remove spaces before and after str
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

function verifyRating() {
  var rate1 = document.getElementById("rate1").checked;
  var rate2 = document.getElementById("rate2").checked;
  var rate3 = document.getElementById("rate3").checked;
  var rate4 = document.getElementById("rate4").checked;

  if (!rate1 && !rate2 && !rate3 && !rate4) {
    alert("You didn't enter a rating");
  }
}

//data access file

//save order in database
function processInfo(name, lastName, phone, order) {
  var dbString = stringify(name, lastName, phone, order);
  localStorage.setItem(name, dbString);
}

function stringify(name, lastName, phone, order) {
  var nameStr = "name: " + name;
  var lastNameStr = "lastName: " + lastName;
  var phonerStr = "phone: " + phone;
  var orderStr = "order: " + order;
  var dbStr =
    "{" + nameStr + "," + lastNameStr + "," + phonerStr + "," + orderStr + "}";
  return dbStr;
}

//save order and amount as a string
function constructOrder(
  food1,
  food2,
  food3,
  food4,
  food5,
  food1_q,
  food2_q,
  food3_q,
  food4_q,
  food5_q,
  salad1,
  salad2,
  salad3,
  salad4,
  salad5,
  salad1_q,
  salad2_q,
  salad3_q,
  salad4_q,
  salad5_q
) {
  let order = "";

  if (food1) {
    order += "Oven baked salmon: " + food1_q + ", ";
  }
  if (food2) {
    order += "Veal fillet: " + food2_q + ", ";
  }
  if (food3) {
    order += "Steak entrecote: " + food3_q + ", ";
  }
  if (food4) {
    order += "Fried shurmus: " + food4_q + ", ";
  }
  if (food5) {
    order += "Cooked calamari shurmus: " + food5_q + ", ";
  }

  // Adding salads
  if (salad1) {
    order += "Fattoush: " + salad1_q + ", ";
  }
  if (salad2) {
    order += "One million: " + salad2_q + ", ";
  }
  if (salad3) {
    order += "Watercress: " + salad3_q + ", ";
  }
  if (salad4) {
    order += "Tabouleh: " + salad4_q + ", ";
  }
  if (salad5) {
    order += "White cabbage: " + salad5_q + ", ";
  }

  // Remove trailing comma and space
  order = order.slice(0, -2);

  return order;
}

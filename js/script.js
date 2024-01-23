var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("Enter your total budget for the trip."));
  var accommadtionCost = Number(prompt("Enter your accommadation costs."));
  var numDays = Number(prompt("Enter the amount of days your trip will last?"));

  calcDailyBudget(totalBudget, accommadtionCost, numDays);
  //why is there a function iside of a function
};

//When do I place qoutation marks in the functions area.
var calcDailyBudget = function (totalBudget, accommadtionCost, numDays) {
  var daily = ((totalBudget - accommadtionCost) / numDays).toFixed(2);

  dailyBudget.innerText = `You can spend $${daily} a day on food and fun`;
};

tripInfoButton.addEventListener("click", tripInfo);

import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function(){
  update();
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();
  
  const button = event.target.querySelector("#submit-btn");
  
  const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
  const withdrawalAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  const compoundYears = parseFloat(document.getElementById("compound-year").value);

  button.setAttribute("disabled", true);

  if(document.getElementById("deposit-amount").value.length !== 0){
    await dbank.deposit(depositAmount);
  }

  if(document.getElementById("withdrawal-amount").value.length !== 0){
    await dbank.withdraw(withdrawalAmount);
  }

  if(document.getElementById("compound-year").value.length !== 0){
    await dbank.compound(compoundYears);
  }

  update();
  document.getElementById("deposit-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  document.getElementById("compound-year").value = "";
  button.removeAttribute("disabled");
});

async function update(){
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmount.toFixed(2);
}
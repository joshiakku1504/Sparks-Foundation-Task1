let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
// console.log("hello");
function sendMoney() {
   
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   // if (enterAmount > myAccountBalance) {
   //    alert("Insufficient Balance.");
   // }
   
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      // console.log("hello");
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      if(myAccountBalance<0){
         alert("Insufficient balance!");
      }
      else{
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(` Transaction Successful !!  
      ₹${enterAmount} is sent to ${enterName}@xyzemail.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@xyzemail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   } 
   }
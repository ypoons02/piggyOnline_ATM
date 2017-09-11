var savingsBalance = 0;
var checkBalance = 0;

function savingAcc (accType,amt){
  //calc withdraw savings
  if(accType==="savWithdraw" && savingsBalance >= amt){
    savingsBalance -= amt;
    document.getElementById("savBal").innerHTML = "$"+savingsBalance.toFixed(2);
    }
  else if(accType==="savWithdraw" && savingsBalance <= amt){
    document.getElementById("savBal").innerHTML = "Insufficient Funds =( Your balance is "+savingsBalance.toFixed(2);
    }
  //calc deposit savings
  if(accType==="savDepo"){
    savingsBalance += amt;
    document.getElementById("savBal").innerHTML = "$"+savingsBalance.toFixed(2);
    }
}

function checksAcc(accType,amt){
  //calc withdraw check
  if(accType==="chkWithdraw" && checkBalance >= amt){
    checkBalance -= amt;
    document.getElementById("chkBal").innerHTML = "$"+checkBalance.toFixed(2);
    }
  else if(accType==="chkWithdraw" && checkBalance <= amt){
    document.getElementById("chkBal").innerHTML = "Insufficient Funds=( Your balance is "+checkBalance.toFixed(2);
    }
  //calc deposit check
  if(accType==="chkDepo"){
    checkBalance += amt;
    document.getElementById("chkBal").innerHTML = "$"+checkBalance.toFixed(2);
    }
}

document.body.addEventListener('click',function(event){
  var functionToRun = event.target.name;
  var amt;
  switch(functionToRun) {
    case "savWithdraw":
        amt = Number(document.getElementById('savAccInput').value);
        savingAcc(functionToRun,amt);
        break;
    case "savDepo":
        amt = Number(document.getElementById('savAccInput').value);
        savingAcc(functionToRun,amt);
        console.log(functionToRun,amt);
        break;
    case "chkWithdraw":
        amt = Number(document.getElementById('chkAccInput').value);
        checksAcc(functionToRun,amt);
        break;
    case "chkDepo":
        amt = Number(document.getElementById('chkAccInput').value);
        checksAcc(functionToRun,amt);
        break;
      }
});

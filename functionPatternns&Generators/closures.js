//Closures

function createBankAccount(name) {
  let balance = 0
  return {
    depositing: function (money){
    balance +=money
    }, 
    withdrawing: function (money){
    balance -=money
  },
   getBalance: function(){
    console.log(`Hello, ${name}! Current balance: ${balance}`)
   }
  
  }
       

}

const daveAccount = createBankAccount("Dave")
const wendyAccount = createBankAccount("Wendy")


daveAccount.depositing(100)
daveAccount.withdrawing(10)
daveAccount.getBalance()
wendyAccount.getBalance()
//Hello, Dave! Current balance: 90
//Hello, Wendy! Current balance: 0

/*
Is a function(or object with multiple functions) which gives access
to the variables from the parent function scope.
Mainly used to keep a variable alive, even after the function parent 
ended (without a varabile to save the function the variables inside the
function end)
*/
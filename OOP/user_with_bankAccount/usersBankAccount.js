class BankAccount {	
    constructor(intRate, balance) {
        this.intRate = intRate
        this.balance = balance
    }


    makeDeposit(amount){
        this.balance += amount;
        console.log(this.balance)
        return this;
    }
    makeWithdrawal(amount){
        if(amount > this.balance){
            console.log('insufficient funds')
        }
        else 
        this.balance -= amount;
        return this;
    }
    displayBalance(){
        console.log(`Account balance : $${this.balance}`);
        return this;
    }
    // transferMoney(otherUser, amount){
    //     if(this.accountBalance < amount){
    //         console.log(`${this.name} does not have enough funds to complete this transaction`);
    //         console.log(`Current balance : ${this.accountBalance}`)
    //     }
    //     else
    //     this.accountBalance -= amount;
    //     otherUser.accountBalance += amount;
    //     console.log(`Transferred ${amount} from ${this.name} to ${otherUser.name}. ${otherUser.name} now has $${otherUser.accountBalance}` )
    //     return this;
    // }
    yieldInterest(){
        console.log("Before interest", this.balance)
        let x = this.balance * this.intRate
        this.balance += x
        console.log("After interest", this.balance)
        return this
    }
        
}

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.account = new BankAccount(intRate = 0.02, balance = 0);
    }
    depositToAccount(amount){
        this.account.makeDeposit(amount)
    }
}

let ryan = new User("Ryan Meza", "ryanmeza116@gmail.com");

ryan.depositToAccount(500);



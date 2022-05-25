class BankAccount {	
    constructor(intRate, balance) {
        this.intRate = intRate
        this.balance = balance
    }


    makeDeposit(amount){
        this.balance += amount;
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

let ryan = new BankAccount(0.05, 100);

ryan.makeDeposit(500).makeDeposit(20).makeDeposit(100).makeWithdrawal(500).yieldInterest();

let Abby = new BankAccount(0.05, 100);
Abby.makeDeposit(2000).makeDeposit(200).makeWithdrawal(400).makeWithdrawal(200).makeWithdrawal(300).makeWithdrawal(200).yieldInterest();

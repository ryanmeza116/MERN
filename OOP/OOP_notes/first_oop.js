class User {	
    constructor(userName, emailAddress) {
        this.name = userName
        this.email = emailAddress
        this.accountBalance = 0
    }


    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount){
        if(amount > this.accountBalance){
            console.log(`Sorry, ${this.name}, we cannot make withdrawal of $${amount} , insufficient funds`)
            console.log(`Current account balance: $${this.accountBalance}`)
        }
        else 
        this.accountBalance -= amount;
        return this;
    }
    displayBalance(){
        console.log(`Account balance for ${this.name} : $${this.accountBalance}`);
        return this;
    }
    transferMoney(otherUser, amount){
        if(this.accountBalance < amount){
            console.log(`${this.name} does not have enough funds to complete this transaction`);
            console.log(`Current balance : ${this.accountBalance}`)
        }
        else
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        console.log(`Transferred ${amount} from ${this.name} to ${otherUser.name}. ${otherUser.name} now has $${otherUser.accountBalance}` )
        return this;
    }
}
const guido = new User("Guido Van Russum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");



guido.makeDeposit(120).makeDeposit(500).makeWithdrawal(5000);


monty.makeDeposit(1000).displayBalance().transferMoney(guido, 500);






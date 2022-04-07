// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), then an expression to execute if the condition 
// is truthy followed by a colon (:), and finally the expression
// to execute if the condition is falsy. This operator is frequently used as a shortcut for 
// the if statement.

// Basic if statement 
let itemPrice = 100;
let accountBalance = 300;
let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return `Cant afford! You are $${itemPrice - accountBalance} short` ; 
    } else {
        return 'Can Afford!'
    };

// Same Statement but Ternary

let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    ? `Cannot Afford! You are $${itemPrice - accountBalance} short`
    : 'Can Afford'
};
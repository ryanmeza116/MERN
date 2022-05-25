class Ninja {
constructor (name, health, speed = 5, strength = 5){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
}

sayName(){
    console.log("Ninjas name is: " + this.name);
}

showStats(){
    console.log("Stats for: " + this.name);
    console.log("Health: " + this.health);
    console.log("Speed: " + this.speed);
    console.log("Strength: " + this.strength);
}

drinkSake(){
    this.health += 10;
    console.log(this.name + " just drank sake and his health is now: " + this.health);
}
}

class Sensei extends Ninja {
constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
}

speakWisdom() {
    console.log("Speaking wisdom...");
    this.drinkSake();
    console.log("All is vanity, only fear of The Lord and doing His will has value")
}
}

console.log("\n  Creating Ryan");
const ninja1 = new Ninja("Ryan", 25);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


console.log("\n  Creating Abby");
const ninja2 = new Ninja("Abby", 10, 3, 5);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();


console.log("\n  Creating Sensei Splinter");
const sensei1 = new Sensei("Sensei Splinter");
sensei1.showStats();
sensei1.speakWisdom();

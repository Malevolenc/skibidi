const button = document.getElementById("skibidi_button");
const counter = document.getElementById("counter");

const button1 = document.getElementById("button1");
const upgrade1 = document.getElementById("upgrade1");

const button2 = document.getElementById("button2");
const upgrade2 = document.getElementById("upgrade2");

const cps = document.getElementById("click_per_second");

const save = document.getElementById("save");
const load = document.getElementById("load");

class Game{
    constructor(money, increment){
        this.money = money;
        this.increment = increment;

        this.upgrade1Cost = 100;
        this.upgrade1Level = 1;

        this.upgrade2Cost = 1000;
        this.upgrade2Level = 1;

        this.saved = "false";
    }

    click(){
        this.money += this.increment;
        counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`
    }

    upgrade1(){
        if(this.money < this.upgrade1Cost){
            window.alert(`You need ${((this.money - this.upgrade1Cost)*-1).toFixed(1)} Skibidi Bucks to afford this upgrade`)
        }
        else{
            this.money -= this.upgrade1Cost;
            this.increment += 1;


            this.upgrade1Level++;
            this.upgrade1Cost += (this.upgrade1Cost * 0.5);



            cps.textContent = `${this.increment} Skibidi Bucks Per Click`;
            button1.textContent = `${this.upgrade1Cost.toFixed(1)} Skibidi Bucks`;
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            upgrade1.textContent = `Upgrade Toilet Flush | LVL: ${this.upgrade1Level}`;

        }
    }

    upgrade2(){
        if(this.money < this.upgrade2Cost){
            window.alert(`You need ${((this.money - this.upgrade2Cost)*-1).toFixed(1)} Skibidi Bucks to afford this upgrade`);
        }
        else{
            this.money -= this.upgrade2Cost;
            this.increment += 5;


            this.upgrade2Level++;
            this.upgrade2Cost += (this.upgrade2Cost * 0.5);



            cps.textContent = `${this.increment} Skibidi Bucks Per Click`;
            button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`

        }
    }

    save(){
        const moneyString = (this.money).toString();
        const incrementString = (this.increment).toString();

        const upgrade1CostString = (this.upgrade1Cost).toString();
        const upgrade1LevelString = (this.upgrade1Level).toString();

        const upgrade2CostString = (this.upgrade2Cost).toString();
        const upgrade2LevelString = (this.upgrade2Level).toString();

        localStorage.setItem("Money", moneyString);
        localStorage.setItem("Increment", incrementString);

        localStorage.setItem("Upgrade1Cost",upgrade1CostString);
        localStorage.setItem("Upgrade1Level",upgrade1LevelString);

        localStorage.setItem("Upgrade2Cost",upgrade2CostString);
        localStorage.setItem("Upgrade2Level",upgrade2LevelString);

        this.saved = "true";
        localStorage.setItem("Saved", this.saved);

    }

    load(){
        this.saved = localStorage.getItem("Saved");
        if(this.saved === "false"){
            window.alert(`Please save the game first!`);
        }

        else{
            this.money = parseFloat(localStorage.getItem("Money"));
            this.increment = parseFloat(localStorage.getItem("Increment"));
    
            this.upgrade1Cost = parseFloat(localStorage.getItem("Upgrade1Cost"));
            this.upgrade1Level = parseFloat(localStorage.getItem("Upgrade1Level"));
    
            this.upgrade2Cost = parseFloat(localStorage.getItem("Upgrade2Cost"));
            this.upgrade2Level = parseFloat(localStorage.getItem("Upgrade2Level"));
    
    
    
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            cps.textContent = `${this.increment} Skibidi Bucks Per Click`;
            
            button1.textContent = `${this.upgrade1Cost.toFixed(1)} Skibidi Bucks`;
            upgrade1.textContent = `Upgrade Toilet Flush | LVL: ${this.upgrade1Level}`;
    
            button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
            upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`;
        }
    }
}


let game = new Game(0, 1)

button.onclick = function(){
    game.click();
    
}

button1.onclick = function(){
    game.upgrade1();

}

button2.onclick = function(){
    game.upgrade2();

}

save.onclick = function(){
    game.save();
}

load.onclick = function(){
    game.load();
}


const button = document.getElementById("skibidi_button");
const counter = document.getElementById("counter");

const button1 = document.getElementById("button1"); //toilet touch
const upgrade1 = document.getElementById("upgrade1"); 

const button2 = document.getElementById("button2"); //diddy fest
const upgrade2 = document.getElementById("upgrade2");

const button3 = document.getElementById("button3"); //auto tickler
const upgrade3 = document.getElementById("upgrade3");

const mpc = document.getElementById("money_per_click");
const cps = document.getElementById("money_per_second");

const save = document.getElementById("save");
const load = document.getElementById("load");
const reset = document.getElementById("reset");

class Game{
    constructor(money, increment){
        this.money = money;
        this.increment = increment;
        this.moneyPerSecond = 0;

        this.upgrade1Cost = 1000;
        this.upgrade1Level = 1;

        this.upgrade2Cost = 10000;
        this.upgrade2Level = 1;

        this.upgrade3Cost = 100;
        this.upgrade3Level = 1;

        this.saved = "false";

        this.stats = [
            this.money,
            this.increment,
            this.moneyPerSecond,
            this.upgrade1Cost,
            this.upgrade1Level,
            this.upgrade2Cost,
            this.upgrade2Level,
            this.upgrade3Cost,
            this.upgrade3Level,
            this.saved,
        ]
    }

    click(){
        this.money += this.increment;
        counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;

    }

    upgrade1(){
        if(this.money < this.upgrade1Cost){
            window.alert(`You need ${((this.money - this.upgrade1Cost)*-1).toFixed(1)} Skibidi Bucks to afford this upgrade`)
        }
        else{
            this.money -= this.upgrade1Cost;
            this.increment += 0.5;


            this.upgrade1Level++;
            this.upgrade1Cost += (this.upgrade1Cost * 0.5);



            mpc.textContent = `${this.increment} Skibidi Bucks Per Click`;
            cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
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
            this.increment += 3;


            this.upgrade2Level++;
            this.upgrade2Cost += (this.upgrade2Cost * 0.5);



            mpc.textContent = `${this.increment} Skibidi Bucks Per Click`;
            button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`

        }
    }

    upgrade3(){
        if(this.money < this.upgrade3Cost){
            window.alert(`You need ${((this.money - this.upgrade3Cost)*-1).toFixed(1)} Skibidi Bucks to afford this upgrade`);
        }
        else{
            this.money -= this.upgrade3Cost;
            this.moneyPerSecond++;


            this.upgrade3Level++;
            this.upgrade3Cost += (this.upgrade3Cost * 0.5);



            cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
            button3.textContent = `${this.upgrade3Cost.toFixed(1)} Skibidi Bucks`;
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            upgrade3.textContent = `Upgrade Auto Tickler | LVL: ${this.upgrade3Level}`

        }


    }

    save(){
        const moneyString = (this.money).toString();
        const incrementString = (this.increment).toString();
        const moneyPerSecondString = (this.moneyPerSecond).toString();

        const upgrade1CostString = (this.upgrade1Cost).toString();
        const upgrade1LevelString = (this.upgrade1Level).toString();

        const upgrade2CostString = (this.upgrade2Cost).toString();
        const upgrade2LevelString = (this.upgrade2Level).toString();

        const upgrade3CostString = (this.upgrade3Cost).toString();
        const upgrade3LevelString = (this.upgrade3Level).toString();

        localStorage.setItem("Money", moneyString);
        localStorage.setItem("Increment", incrementString);
        localStorage.setItem("MoneyPerSecond", moneyPerSecondString);

        localStorage.setItem("Upgrade1Cost",upgrade1CostString);
        localStorage.setItem("Upgrade1Level",upgrade1LevelString);

        localStorage.setItem("Upgrade2Cost",upgrade2CostString);
        localStorage.setItem("Upgrade2Level",upgrade2LevelString);

        localStorage.setItem("Upgrade3Cost",upgrade3CostString);
        localStorage.setItem("Upgrade3Level",upgrade3LevelString);

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
            this.moneyPerSecond = parseFloat(localStorage.getItem("MoneyPerSecond"));
    
            this.upgrade1Cost = parseFloat(localStorage.getItem("Upgrade1Cost"));
            this.upgrade1Level = parseFloat(localStorage.getItem("Upgrade1Level"));
    
            this.upgrade2Cost = parseFloat(localStorage.getItem("Upgrade2Cost"));
            this.upgrade2Level = parseFloat(localStorage.getItem("Upgrade2Level"));
    
            this.upgrade3Cost = parseFloat(localStorage.getItem("Upgrade3Cost"));
            this.upgrade3Level = parseFloat(localStorage.getItem("Upgrade3Level"));
    
    
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            mpc.textContent = `${this.increment} Skibidi Bucks Per Click`;
            cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
            
            button1.textContent = `${this.upgrade1Cost.toFixed(1)} Skibidi Bucks`;
            upgrade1.textContent = `Upgrade Toilet Flush | LVL: ${this.upgrade1Level}`;
    
            button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
            upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`;

            button3.textContent = `${this.upgrade3Cost.toFixed(1)} Skibidi Bucks`;
            upgrade3.textContent = `Upgrade Auto Tickler | LVL: ${this.upgrade3Level}`;
        }
    }

    reset(){
        const resetValues = "0";

        localStorage.setItem("Money", resetValues);
        localStorage.setItem("Increment", "1");
        localStorage.setItem("MoneyPerSecond", "0")

        localStorage.setItem("Upgrade1Cost","1000");
        localStorage.setItem("Upgrade1Level","1");

        localStorage.setItem("Upgrade2Cost","10000");
        localStorage.setItem("Upgrade2Level","1");

        localStorage.setItem("Upgrade3Cost","100");
        localStorage.setItem("Upgrade3Level","1");

        localStorage.setItem("Saved", "false");


        this.money = parseFloat(localStorage.getItem("Money"));
        this.increment = parseFloat(localStorage.getItem("Increment"));
        this.moneyPerSecond = parseFloat(localStorage.getItem("MoneyPerSecond"));

        this.upgrade1Cost = parseFloat(localStorage.getItem("Upgrade1Cost"));
        this.upgrade1Level = parseFloat(localStorage.getItem("Upgrade1Level"));

        this.upgrade2Cost = parseFloat(localStorage.getItem("Upgrade2Cost"));
        this.upgrade2Level = parseFloat(localStorage.getItem("Upgrade2Level"));

        this.upgrade3Cost = parseFloat(localStorage.getItem("Upgrade3Cost"));
        this.upgrade3Level = parseFloat(localStorage.getItem("Upgrade3Level"));

        this.saved = localStorage.getItem("Saved");

        counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
        mpc.textContent = `${this.increment} Skibidi Bucks Per Click`;
        cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
        
        button1.textContent = `${this.upgrade1Cost.toFixed(1)} Skibidi Bucks`;
        upgrade1.textContent = `Upgrade Toilet Flush | LVL: ${this.upgrade1Level}`;

        button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
        upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`;

        button3.textContent = `${this.upgrade3Cost.toFixed(1)} Skibidi Bucks`;
        upgrade3.textContent = `Upgrade Auto Tickler | LVL: ${this.upgrade3Level}`;
    }
}


let game = new Game(0, 1);


button.onclick = function(){
    game.click();
    
}

button1.onclick = function(){
    game.upgrade1();

}

button2.onclick = function(){
    game.upgrade2();

}

button3.onclick = function(){
    game.upgrade3();

}

save.onclick = function(){
    game.save();
}

load.onclick = function(){
    game.load();
}

reset.onclick = function(){
    game.reset();
}

function IdleMoney(){
    game.money += game.moneyPerSecond;
    counter.textContent = `${game.money.toFixed(1)} Skibidi Bucks`;
}

setInterval(IdleMoney,1000);

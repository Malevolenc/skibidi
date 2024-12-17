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
const mm = document.getElementById("money_multiplier");

const rebirth = document.getElementById("rebirth_button");
const rebirthLevel = document.getElementById("rebirthLevel");

const bossFight = document.getElementById("bossFight");

const skibidiOption = document.getElementById("skibidiOption");
const kanyeOption = document.getElementById("kanyeOption");

const bossOption1 = document.getElementById("bossFightOption1");
const bossOption2 = document.getElementById("bossFightOption2");
const bossOption3 = document.getElementById("bossFightOption3");
const bossOption4 = document.getElementById("bossFightOption4");
const bossOption5 = document.getElementById("bossFightOption5");
const bossOption6 = document.getElementById("bossFightOption6");

const options = document.getElementById("options");
const settingMenu = document.getElementById("settingMenu");
const closeMenu = document.getElementById("close");

const save = document.getElementById("save");
const load = document.getElementById("load");
const reset = document.getElementById("reset");

const imageChangeOption = document.getElementById("imageChangeOption");
const buttonChanger = document.getElementById("buttonChanger");
const closeImageChanger = document.getElementById("closeImageChanger");

class Game{
    constructor(money, increment){
        this.money = money;
        this.increment = increment;
        this.moneyPerSecond = 0;

        this.totalMultiplier = 1;
        this.rawMultiplier = this.totalMultiplier;

        this.upgrade1Cost = 500;
        this.upgrade1Level = 0;

        this.upgrade2Cost = 5000;
        this.upgrade2Level = 0;

        this.upgrade3Cost = 100;
        this.upgrade3Level = 0;

        this.rebirthCost = 1000;
        this.rebirthCount = 0;
        this.bossFightStatus = false;

        this.kanyeMultiplier = 2;
        this.usingKanye = false;

        this.saved = "false";
    }

    click(){
        this.money += this.increment * this.totalMultiplier;
        counter.textContent = `${(this.money).toFixed(1)} Skibidi Bucks`;
        mpc.textContent = `${(this.increment * this.totalMultiplier).toFixed(1)} Skibidi Bucks Per Click`;
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



            mpc.textContent = `${((this.increment).toFixed(1))*this.totalMultiplier} Skibidi Bucks Per Click`;
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



            mpc.textContent = `${((this.increment).toFixed(1))*this.totalMultiplier} Skibidi Bucks Per Click`;
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
            this.moneyPerSecond += (1 * this.totalMultiplier);


            this.upgrade3Level++;
            this.upgrade3Cost += (this.upgrade3Cost * 0.5);



            cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
            button3.textContent = `${this.upgrade3Cost.toFixed(1)} Skibidi Bucks`;
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            upgrade3.textContent = `Upgrade Auto Tickler | LVL: ${this.upgrade3Level}`

        }
    }

    rebirth(){
        if(this.money < this.rebirthCost){
            window.alert(`You need ${(this.rebirthCost - this.money).toFixed(1)} Skibidi Bucks to fight Kanye!`)
        }

        else{
            this.money -= this.rebirthCost;
            let guesses = 1;
            bossFight.style.visibility = "visible";

            const buttonList = [
                bossOption1,
                bossOption2,
                bossOption3,
                bossOption4,
                bossOption5,
                bossOption6
            ]

            let chosenButton = buttonList[Math.floor((Math.random()*6))];

            function checkCorrectGuess(answer){
                if(answer === chosenButton){
                    window.alert("Correct!");
                    bossFight.style.visibility = "hidden";
                    game.rebirthCount += 1;
                    rebirthLevel.textContent = `Rebirth | ${game.rebirthCount}`;
                    game.resetRebirth();

                }

                else{
                    window.alert("Incorrect!");
                    guesses--;
                    bossFight.style.visibility = "hidden";
                }

            }

            if(guesses == 1){
                bossOption1.onclick = function(){
                    checkCorrectGuess(bossOption1);
                }
                bossOption2.onclick = function(){
                    checkCorrectGuess(bossOption2);
                }
                bossOption3.onclick = function(){
                    checkCorrectGuess(bossOption3);
                }
                bossOption4.onclick = function(){
                    checkCorrectGuess(bossOption4);
                }
                bossOption5.onclick = function(){
                    checkCorrectGuess(bossOption5);
                }
                bossOption6.onclick = function(){
                    checkCorrectGuess(bossOption6);
                }
            }
        }

    }

    save(){
        const moneyString = (this.money).toString();
        const incrementString = (this.increment).toString();
        const moneyPerSecondString = (this.moneyPerSecond).toString();
        
        const totalMultiplierString  = (this.rawMultiplier).toString();

        const upgrade1CostString = (this.upgrade1Cost).toString();
        const upgrade1LevelString = (this.upgrade1Level).toString();

        const upgrade2CostString = (this.upgrade2Cost).toString();
        const upgrade2LevelString = (this.upgrade2Level).toString();

        const upgrade3CostString = (this.upgrade3Cost).toString();
        const upgrade3LevelString = (this.upgrade3Level).toString();

        const rebirthCostString = (this.rebirthCost).toString();
        const rebirthCountString = (this.rebirthCount).toString();

        localStorage.setItem("Money", moneyString);
        localStorage.setItem("Increment", incrementString);
        localStorage.setItem("MoneyPerSecond", moneyPerSecondString);

        localStorage.setItem("totalMultiplier", totalMultiplierString);

        localStorage.setItem("Upgrade1Cost",upgrade1CostString);
        localStorage.setItem("Upgrade1Level",upgrade1LevelString);

        localStorage.setItem("Upgrade2Cost",upgrade2CostString);
        localStorage.setItem("Upgrade2Level",upgrade2LevelString);

        localStorage.setItem("Upgrade3Cost",upgrade3CostString);
        localStorage.setItem("Upgrade3Level",upgrade3LevelString);

        localStorage.setItem("rebirthcost", rebirthCostString);
        localStorage.setItem("rebirthCount",rebirthCountString);

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
            this.totalMultiplier = parseFloat(localStorage.getItem("totalMultiplier"));
    
            this.upgrade1Cost = parseFloat(localStorage.getItem("Upgrade1Cost"));
            this.upgrade1Level = parseFloat(localStorage.getItem("Upgrade1Level"));
    
            this.upgrade2Cost = parseFloat(localStorage.getItem("Upgrade2Cost"));
            this.upgrade2Level = parseFloat(localStorage.getItem("Upgrade2Level"));
    
            this.upgrade3Cost = parseFloat(localStorage.getItem("Upgrade3Cost"));
            this.upgrade3Level = parseFloat(localStorage.getItem("Upgrade3Level"));

            this.rebirthCost = parseFloat(localStorage.getItem("rebirthCost"));
            this.rebirthCount = parseFloat(localStorage.getItem("rebirthCount"))
    
    
            counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
            mpc.textContent = `${this.increment} Skibidi Bucks Per Click`;
            cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
            mm.textContent = `Multiplier: ${this.totalMultiplier}x`;
            
            button1.textContent = `${this.upgrade1Cost.toFixed(1)} Skibidi Bucks`;
            upgrade1.textContent = `Upgrade Toilet Flush | LVL: ${this.upgrade1Level}`;
    
            button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
            upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`;

            button3.textContent = `${this.upgrade3Cost.toFixed(1)} Skibidi Bucks`;
            upgrade3.textContent = `Upgrade Auto Tickler | LVL: ${this.upgrade3Level}`;

            rebirthLevel.textContent = `Rebirths | ${this.rebirthCount}`;

            
        }
    }

    resetSave(){
        localStorage.setItem("Money", "0");
        localStorage.setItem("Increment", "1");
        localStorage.setItem("MoneyPerSecond", "0")
        localStorage.setItem("totalMultiplier", "1");

        localStorage.setItem("Upgrade1Cost","500");
        localStorage.setItem("Upgrade1Level","0");

        localStorage.setItem("Upgrade2Cost","5000");
        localStorage.setItem("Upgrade2Level","0");

        localStorage.setItem("Upgrade3Cost","100");
        localStorage.setItem("Upgrade3Level","0");

        localStorage.setItem("rebirthCost", "10000");
        localStorage.setItem("rebirthCount", "0");

        localStorage.setItem("Saved", "false");


        this.money = parseFloat(localStorage.getItem("Money"));
        this.increment = parseFloat(localStorage.getItem("Increment"));
        this.moneyPerSecond = parseFloat(localStorage.getItem("MoneyPerSecond"));
        this.rebirthMultiplier = parseFloat(localStorage.getItem("RebirthMultiplier"));

        this.upgrade1Cost = parseFloat(localStorage.getItem("Upgrade1Cost"));
        this.upgrade1Level = parseFloat(localStorage.getItem("Upgrade1Level"));

        this.upgrade2Cost = parseFloat(localStorage.getItem("Upgrade2Cost"));
        this.upgrade2Level = parseFloat(localStorage.getItem("Upgrade2Level"));

        this.upgrade3Cost = parseFloat(localStorage.getItem("Upgrade3Cost"));
        this.upgrade3Level = parseFloat(localStorage.getItem("Upgrade3Level"));

        this.rebirthCost = parseFloat(localStorage.getItem("rebirthCost"));
        this.rebirthCount = parseFloat(localStorage.getItem("rebirthCount"));

        this.saved = localStorage.getItem("Saved");

        counter.textContent = `${this.money.toFixed(1)} Skibidi Bucks`;
        mpc.textContent = `${this.increment} Skibidi Bucks Per Click`;
        cps.textContent = `${this.moneyPerSecond} Skibidi Bucks Per Second`;
        mm.textContent = `Multiplier: ${this.rebirthMultiplier}x`;
        
        button1.textContent = `${this.upgrade1Cost.toFixed(1)} Skibidi Bucks`;
        upgrade1.textContent = `Upgrade Toilet Flush | LVL: ${this.upgrade1Level}`;

        button2.textContent = `${this.upgrade2Cost.toFixed(1)} Skibidi Bucks`;
        upgrade2.textContent = `Upgrade Diddy Fest | LVL: ${this.upgrade2Level}`;

        button3.textContent = `${this.upgrade3Cost.toFixed(1)} Skibidi Bucks`;
        upgrade3.textContent = `Upgrade Auto Tickler | LVL: ${this.upgrade3Level}`;

        rebirthLevel.textContent = `Rebirths | ${this.rebirthCount}`;
    }

    resetRebirth(){
        localStorage.setItem("Money", "0");
        localStorage.setItem("Increment", "1");
        localStorage.setItem("MoneyPerSecond", "0")

        localStorage.setItem("Upgrade1Cost","500");
        localStorage.setItem("Upgrade1Level","0");

        localStorage.setItem("Upgrade2Cost","5000");
        localStorage.setItem("Upgrade2Level","0");

        localStorage.setItem("Upgrade3Cost","100");
        localStorage.setItem("Upgrade3Level","0");

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

        this.rebirthCost*=100;

        this.totalMultiplier++;
        this.rawMultiplier = this.totalMultiplier;

        mm.textContent = `Multiplier: ${this.totalMultiplier}x`;

    }

    changeImage(image){
        if(image == 'kanye'){
            if(this.rebirthCount > 0){
                if(this.usingKanye == false){
                    button.innerHTML = `<img src="kanye east.png" height="400px" width="400px" margin-top="40px">`;
                    this.rawMultiplier = this.totalMultiplier;
                    this.totalMultiplier += this.kanyeMultiplier;
                    mm.textContent = `Multiplier: ${this.totalMultiplier}x`;
                    this.usingKanye = 'true';
                }

            
                else{
                    window.alert("You are already using Kanye!")
                }
            }

            else{
                window.alert("Must have atleast 1 rebirth to use!")
            }
            
        }

    }
}


let game = new Game(0, 1);


button.onclick = function(){
    game.click();
    
}

rebirth.onclick = function(){
    game.rebirth();
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
    game.resetSave();
}

function IdleMoney(){
    game.money += game.moneyPerSecond / 2;
    counter.textContent = `${game.money.toFixed(1)} Skibidi Bucks`;
}

options.addEventListener("click", activateMenu);
closeMenu.addEventListener("click", activateMenu);

function activateMenu(){
    settingMenu.classList.toggle("open");
}

imageChangeOption.onclick = function(){
    buttonChanger.style.visibility = "visible";
};

closeImageChanger.onclick = function(){
    buttonChanger.style.visibility = "hidden";
}

setInterval(IdleMoney,500);

kanyeOption.onclick = function(){
    game.changeImage('kanye');
}
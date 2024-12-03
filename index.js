const button = document.getElementById("skibidi_button");
const counter = document.getElementById("counter");
const button1 = document.getElementById("button1");
const upgrade1 = document.getElementById("upgrade1");
const cps = document.getElementById("click_per_second");

let value = 0;
let increment = 1;
let cost = 10;
let upgrade = 1


button.onclick = function(){
    value += increment
    counter.textContent = `${value.toFixed(1)} Skibidi Bucks`;
}


button1.onclick = function(){
    if(value < cost){
        window.alert(`You need ${(cost-value).toFixed(1)} Skibidi Bucks to upgrade!`);
    }
    else{
        value-=cost;
        increment++;
        cost += cost * 0.5;
        upgrade++
    }

    button1.textContent = `${cost.toFixed(1)} Skibidi Bucks`
    upgrade1.textContent = `Upgrade Toilet Touch | LVL: ${upgrade}`
    counter.textContent = `${value.toFixed(1)} Skibidi Bucks`;
    cps.textContent = `${increment} Skibidi Bucks Per Click`

}


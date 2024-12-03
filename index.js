const button = document.getElementById("skibidi_button");
const counter = document.getElementById("counter");
const upgrade1 = document.getElementById("upgrade1");

let value = 0;
let increment = 1;
let cost = 10;


button.onclick = function(){
    value += increment
    counter.textContent = value.toFixed(1)
}


upgrade1.onclick = function(){
    if(value < cost){
        window.alert(`You need ${(cost-value).toFixed(1)} Skibidi Bucks to upgrade!`);
    }
    else{
        value-=cost;
        increment++;
        cost += cost * 0.5;
    }

    upgrade1.textContent= `Upgrade: ${cost.toFixed(1)} Skibidi Bucks`
    counter.textContent = value.toFixed(1);

}


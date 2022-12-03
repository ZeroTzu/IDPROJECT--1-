class ShipClass{
    constructor(FictOrHistoricalname,name,gunCaliber,topSpeed,shipLength,tier,description){
        this.tier=tier;
        this.name=name;
        this.gunCaliber=gunCaliber;
        this.topSpeed=topSpeed;
        this.shipLength=shipLength;
        this.description=description;
        this.FictOrHistoricalname=FictOrHistoricalname;
        
        fShipList.push(this)
    }
    gcToInches(){
        return Math.round(this.gunCaliber*0.0393701)
    }
    concealmentToMiles(){
        return Math.round(this.concealment*0.621371)
    }
    slToFeet(){
        return Math.round(this.shipLength*2.24)
    }
    outputStats(){
        const theString=
        `
        Name: ${this.name}<br>
        Tier: ${this.tier}<br>
        Gun Caliber: ${this.gunCaliber} mm (${this.gcToInches()} inches) <br>
        Top Speed: ${this.topSpeed} knots <br>
        Ship Length: ${this.shipLength} (${this.slToFeet()} feet)<br>
        `
        return theString
    }
};
var fShipList= []
var hShipList= []
var Yamato =new ShipClass("h",'Yamato',480,27,263,10,
`Japanese IJN Yamato,hailed as the largest battleship mankind has built, was arguably the mightiest of them all.
Its gargantuan 18 inch main guns, mounted on 3 triple gun turrets were to this day, the largest guns mounted on any warship.
However, even the mightiest of ships are not invincible. On April 7 1945, a fleet of over 400 aircrafts were dispatched from 11 American aircraft carriers sunk the yamato. <br>
In game, IJN Yamato is a Tier-10 battleship in the Japanese tree. It features a top speed 27 knots(50km/h) and its hallmark Japanese guns shred almost any foes it encounters`);
var Iowa= new ShipClass("h",'Iowa',406,28.7,270,10,
`American USS Iowa was one of four Iowa class battleships built for the united states navy. It featured 16 inch Main guns mounted on 3 triple gun turrets made it a formidable foe for any 
enemies that could have faced it in battle. The Mark 1 fire control systems on its gun systems were known to be so accurate that when its sister ship, the USS New Jersey, was 
redeployed in the vietnam war, the navy opted to keep its existing systems due to its effectiveness.<br>
In game, the Iowa is known for its reliability, wield it well, and you will absolutely devastate the enemy. With its ability to deplay scout planes to extend its maximum range,
it doubles as an amazing sniper ship in the right hands.`);
var Hsienyang= new ShipClass("h",'Hsienyang',127,37.8,106,8,
`Chinese destroyer ROCS Hsienyang was originally and American USS Rodman before it was subsequently transferred into the custody of The Republic of China Navy.<br>
In game, the Hsienyang is a versatile ship with an amazing smoking kit. Its smoke had a minimum downtime of roughly 15 seconds, allowing it to constantly hide in the cover of smoke almost all the time, while being able to dish
out respecatble damage from its small but reliable main guns. In good hands, its deep water torpedoes also make it a deadly threat to any cruisers or battleship that wanders nearby`);
var Hermes = new ShipClass("h",'Hermes',null,25,236,4,
`British Aircraft Carrier HMS Hermes can be said to be the first aircraft carrier in the world. Although Japanese IJN Hosho was launched earlier,
HMS Hermes was the first to be designed and first to start contruction.However subsequent delays caused the ship to be launched much later.<br>
In game, Hermes is a formidable carrier with a powerful arsenal of carpet bombing dive bombers, allowing it to quickly spot and destroy enemy cruisers and destroyers before they slither out of sight.
`);
var Satsuma = new ShipClass("f","Satsuma",510,27,305,"Supership",
`Japanese IJN Satsuma is a fictitious ship that was designed by developers to be a step up from the Yamato. It currently ties IJN Shikishima for having the largest Main Guns in the game at a whopping 20 inch (510mm) diameter. Its absolutely
collasal size of its main guns mean that it can shred through practically every armour in the game. `)
var Kearsarge = new ShipClass("f","Kearsarge",406,30,305,9,
`American USS Kearsarge is a fictitious hybrid carrier-battleship.Almostly unbelievably, it was designed at one point in the 1930s, however it never made it past that point.<br>
 One may look at it and assume it is an easy target with its large, hunking frame. However, the presence of a runway means it can launch planes behind the safety of islands although its sluggish and enormous nature easily gives the enemy
 a field day if left in the open. Furthermore, the presence of a 16 inch gun means it can put up a good fight when push comes to shove.`)
var Schlieffen = new ShipClass("f","Schlieffen",420,34.1,282,10,
`German Schlieffen is a fictitious battleship. In game, it is simply an incredible ship. One might think its just another battleship, with its slightly above average Main armaments and top speed, it cna already prove to be a danger to most ships.
However, it shines the most when it gets close to the enemy. Its secondary armament comprising of 8x150mm and 16x105mm twin turrets that all have a maximum possible range of 12km will rain hell on any enemy ships nearby. Coupled with its
ability to use torpedoes, any enemy that dares wander close to it will surely be punished severly for it.`)
var Bismarck = new ShipClass("h","Bismarck",380,28.52,250,8,
`German battleship Schlieffen likely has the most impressive resume of any battleship that has existed. It represents the pinnacle of german ship engineering during world war 2. In May 24 1941, Battleship Bismark and Heavy Cruiser Prinz Eugen sinks
 the pride of the British fleet, battlecruiser HMS Hood, and moderately damaged battleship HMS Prince of Wales. However, days later in May 27 1941, it suffered a gruesome fate when it was hunted down sunk by allied british ships. Estimates say that
 it sustained at least over 500 shells and multiple torpedo hits over the course of 74 minutes before it was eventually sunk.<br>
 In game, it boasts an impressive secondary armament similar to other german battleships, making it a formidable opponent in most close-medium range battles.`)
 
 function AddShipsToHTML()
 {
    var newDiv=document.createElement("div");
    const shipList=[Yamato,Iowa,Hsienyang,Hermes,Satsuma,Kearsarge,Schlieffen,Bismarck]
    shipList.forEach(ship => {
        let refContainer=document.body.querySelector(".content").querySelector(".Ships")
        let newDiv=document.createElement("div");
        let newImg=document.createElement("img");
        let newA=document.createElement("a")
        newImg.src=`images/Ships/${ship.name}.jpeg`
        newDiv.innerHTML=`${ship.outputStats()} ${ship.description}<br>`;
        newDiv.id=`${ship.name}`;
        newA.href=`#${ship.name}`
        newA.innerHTML=`${ship.name}`
        if (ship.FictOrHistoricalname=="h"){
            refContainer.querySelector(".historical").appendChild(newDiv);
            refContainer.querySelector(".historical").querySelector(`#${ship.name}`).appendChild(newImg)
        }
        else if(ship.FictOrHistoricalname=="f"){
            refContainer.querySelector(".fictitious").appendChild(newDiv);
            refContainer.querySelector(".fictitious").querySelector(`#${ship.name}`).appendChild(newImg)
        }
        refContainer.querySelector(".Intro").querySelector(".quickscrollbox").appendChild(newA)
    })
  
 }
 
 AddShipsToHTML()


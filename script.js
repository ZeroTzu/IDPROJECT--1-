class ShipClass{
    constructor(name,gunCaliber,topSpeed,concealment,shipLength,tier,description){
        this.tier=tier;
        this.name=name;
        this.gunCaliber=gunCaliber;
        this.topSpeed=topSpeed;
        this.concealment=concealment;
        this.shipLength=shipLength;
        this.description=description;
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
        Concealment: ${this.concealment} (${this.concealmentToMiles()})Km <br>
        Ship Length: ${this.shipLength} (${this.slToFeet()})<br>
        `
        return theString
    }
};
var Yamato =new ShipClass('Yamato',480,27,13.5,263,7,
`IJN Yamato,hailed as the largest battleship mankind has built, was arguably the mightiest of them all.
   Its gargantuan 18 inch main to this day, were the largest gun mounted on any warship.
   However, even the mightiest of ships are not invincible. On April 7 1945, a fleet of over 400 aircrafts were dispatched from 11 American aircraft carriers sunk the yamato. 
   In game, IJN Yamato is a Tier-10 battleship in the Japanese tree. It features a top speed 27 knots(50km/h)`)
console.log(Yamato.outputStats())
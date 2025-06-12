// const { handle } = require("express/lib/application");


alert("???");

var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class Game{
    constructor(players, deck){
        this.players   = players;
        this.deck      = deck;
        this.turnCount = 3;
        this.turn = 0;
        this.activePlayer = players[0];

        this.deal();
        this.play();
        this.judge();
    }

    notOver = function(){
        if (judged = true){return false}
        else{return true}
    }

    deal = function(){
        for (var i = 0; i < this.players.length; i++){
            this.players[i].hand.push(this.deck[i]);
            alert(" i dealt to " + this.players[i].name);
            alert(this.players[i].name + " got a " + this.players[i].hand[0].value)
        }
    }

    judge = function(){
        if (this.players[0].hand.value > this.player[1].hand.value){
            return 1;
        }
        
    }

    play = function(){
        // step 1: shuffle deck
        this.deck.shuffle();
        console.log(this.deck);
        // step 2: deal out cards
        this.deal();
        // step 3: each player takes their turns repeatedly
        // on event
        document.body.addEventListener("click", this.notOver.bind(this));

        while (this.notOver() ){
            alert("still playing");
            //this.activePlayer = this.players[ this.turnCount % this.players.length];
        }

        // step 4: check for winner

        // step 5: end and/or repeat
        alert("the game is over");
    };
   
}

class Player{
    constructor(name){
        // the stuff that IS the player
        this.name = name;
        this.hand = [];
        this.vicstate = "nothing";
    }
    // the stuff the player can do
    draw(){
    }
}

class Deck{
    constructor(num){
        this.cardCount = num;
        this.cards = [];
        this.make();
        this.shuffle();
    }

    make(){
        var deck = [];

        for(var i = 0; i < this.cardCount; i++){
            var card = new Card(i);
            this.cards.push(card);
        }

    return this.cards;
    }
    shuffle(){
        alert("i shuffled");
    }
}

class Card{
    constructor(num){
        this.id = num;
        this.suit = Math.floor(num / 13);
        this.value = num % 13;
        this.pic = "cardcutsheet.svg";
    }

    draw(){
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "silver:" + this.id;
        cardCopy.style.backgroundPositionX = -(this.id)+"00%";
        cardCopy.style.backgroundPositionY = Math.floor(this.id/-13)+"00%";

        TARGET.append(cardCopy);
    }
}

var sue = new Player ("sue");
var steve = new Player("steve");
var myDeck = new Deck(52);
new Game( [steve, sue], myDeck );
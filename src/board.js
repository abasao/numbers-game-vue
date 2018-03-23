var Card = function (value, row, col) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.id = idGetter();
    this.isEliminated = false;
};

Card.prototype.isGone = function () {
    return this.isEliminated
}

var idGetter;
(function () {
        var id = 0;
        idGetter = function (){
            return id++
        }
})()

var Board = function (size = 4) {
    this.size = size;
    this.cards = Array(this.size);
    this.currentCard = false;
    this.previousCard = false;
    for (let row = 0; row < this.size; row++) {
        this.cards[row] = Array(this.size).fill({});
        for (let col = 0; col < this.size; col++) {
            //console.log(this.addCard(row, col))
            this.cards[row][col] = this.addCard(row,col);
        }
    }
}

Board.prototype.addCard = function(row, col){
    let RNG = Math.floor(Math.random() * 11);
    let newCard = new Card;
    Card.apply(newCard, [RNG, row, col])
    return newCard
}

Board.prototype.select = function(card){
    console.log('inside select')
    if(!this.currentCard){
        this.currentCard = card;
    }
    else if (!this.previousCard){
        this.previousCard = card;
    }
    if (this.currentCard && this.previousCard){
        if (card.value === this.currentCard.value){
            card.value +=2;
            this.currentCard.value += 2;
            this.currentCard = false;
            this.previousCard = false;
        }else{
            card.isEliminated = true;
            this.previousCard.isEliminated = true;
        }
    }
}
export { Board }
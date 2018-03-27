var Card = function (value, row, col) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.id = idGetter();
    this.isEliminated = false;
    this.isVisible = false;
};

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
    card.isVisible = !card.isVisible;
    if(!this.currentCard){
        this.currentCard = card;
    }
    else if (!this.previousCard){
        this.previousCard = card;
    }
    if (this.currentCard && this.previousCard){
        let equalValue = this.previousCard.value === this.currentCard.value
        if (!equalValue && card !== (this.previousCard || this.currentCard)){
            //Hide them
            this.currentCard.isVisible = false;
            this.previousCard.isVisible = false;            
            //Reset temporary card slots
            this.currentCard = false;
            this.previousCard = false;
            //assign the 3rd card to currentCard
            this.currentCard = card;
        } else if (card !== (this.previousCard || this.currentCard)){
            //eliminate both cards if values are equal
            this.currentCard.isEliminated = true;
            this.previousCard.isEliminated = true;
            //reset temp slots
            this.currentCard = false;
            this.previousCard = false;
            //assign 3rd card to current card
            this.currentCard = card;
        }
    }
}
export { Board }
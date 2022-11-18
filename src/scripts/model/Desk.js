import Card from "./Card.js";

export default class Desk {
    constructor(name) {
        this.name = name;
        this.percentage = 0;
        this.cards = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPercentage() {
        let sumPercentages = 0;
        this.cards.forEach((card) => {
            sumPercentages += card.getPercentage();
        })

        this.percentage = Math.round(sumPercentages / this.getCardsLength());
    }

    getPercentage() {
        return this.percentage;
    }

    getCardsLength() {
        return this.cards.length;
    }

    getCard(index) {
        return this.cards[index];
    }

    deleteCard(index) {
        this.cards.splice(index, 1);
    }

    addCard(question, answer) {
        this.cards.push(new Card(question, answer));
    }

    editCard(index, question, answer) {
        this.cards[index].edit(question, answer);
    }

}
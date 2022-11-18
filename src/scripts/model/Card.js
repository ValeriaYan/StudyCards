export default class Card {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.percentage = 0;
    }

    setQuestion(question) {
        this.question = question;
    }

    getQuestion() {
        return this.question;
    }

    setAnswer(answer) {
        this.answer = answer;
    }

    getAnswer() {
        return this.answer;
    }

    editPercentage(progressPercentage) {
        this.percentage += progressPercentage;

        if(this.percentage < 0) {
            this.percentage = 0;
        }

        if(this.percentage > 100) {
            this.percentage = 100;
        }
    }

    getPercentage() {
        return this.percentage;
    }

    edit(question, answer) {
        this.question = question;
        this.answer = answer;
    }
} 
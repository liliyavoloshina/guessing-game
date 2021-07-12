class GuessingGame {
    constructor() {
        this.max = 0
        this.min = 0
        this.number = 0
    }

    setRange(min, max) {
        this.max = max
        this.min = min
        console.log(this.min, this.max);
    }

    guess() {

    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;

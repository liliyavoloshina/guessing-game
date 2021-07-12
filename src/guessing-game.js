class GuessingGame {
    constructor() {
        this.max = 0
        this.min = 0
        this.candidate = 0
    }

    setRange(min, max) {
        this.max = max
        this.min = min
        console.log(this.min, this.max);
    }

    guess() {
        this.candidate = (this.min + this.max) / 2
        return this.candidate
    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;

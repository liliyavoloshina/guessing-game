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
        this.candidate = Math.round((this.min + this.max) / 2)
        return this.candidate
    }

    lower() {
        this.max = this.candidate
    }

    greater() {
        this.min = this.candidate
    }
}

module.exports = GuessingGame;

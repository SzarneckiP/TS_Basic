class Exchanger {
    private gold: number;
    private silver: number;
    private copper: number;

    constructor(gold: number, silver: number, copper: number) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }

    public toCopper() {
        const goldToCopper = (this.gold * 20) * 12;
        const silverToCopper = this.silver * 12;
        return goldToCopper + silverToCopper + this.copper;
    }
}

export default Exchanger;
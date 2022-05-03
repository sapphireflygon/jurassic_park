const Park = function (input_name, input_ticket_price) {
    this.name = input_name;
    this.ticketPrice = input_ticket_price;
    this.collection = []
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.collection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    let newCollection = []
    for (const dino of this.collection) {
        if (dino !== dinosaur) {
            newCollection.push(dino);
        };
    };
    this.collection = newCollection;
};

Park.prototype.whichDinoAttractsMostVisitors = function () {
    this.collection.sort(function(firstDino, secondDino) {return firstDino.guestsAttractedPerDay-secondDino.guestsAttractedPerDay} );
    const mostPopularDino = this.collection[this.collection.length-1];
    return mostPopularDino;
};

Park.prototype.findAllDinosOfSpecies = function (species) {
    let dinosOfSpecies = [];
    for (const dino of this.collection) {
        if (dino.species === species) {
            dinosOfSpecies.push(dino);
        };
    };
    return dinosOfSpecies;
};

Park.prototype.totalDailyVisitors = function () {
    let total = 0;
    for (const dino of this.collection) {
        total += dino.guestsAttractedPerDay;
    };
    return total
};

Park.prototype.visitorsPerYear = function () {
    const dailyVisitors = this.totalDailyVisitors();
    const yearlyVisitors = dailyVisitors*365;
    return yearlyVisitors;
};

Park.prototype.totalYearlyRevenue = function () {
    const yearlyVisitors = this.visitorsPerYear();
    const revenue = yearlyVisitors*this.ticketPrice;
    return revenue;
};

module.exports = Park;
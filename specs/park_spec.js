const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino_1;
  let dino_2;
  let park;

  beforeEach(function () {
    dino_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino_2 = new Dinosaur('triceratops', 'herbivore', 20);
    park = new Park('Jurassic Park', 5);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dino_1);
    const actual = park.collection;
    assert.deepEqual(actual, [dino_1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dino_1);
    park.addDinosaur(dino_1);
    park.addDinosaur(dino_2);
    park.removeDinosaur(dino_1);
    const actual = park.collection;
    assert.deepEqual(actual, [dino_2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dino_2);
    park.addDinosaur(dino_1);
    const actual = park.whichDinoAttractsMostVisitors();
    assert.strictEqual(actual, dino_1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dino_1);
    park.addDinosaur(dino_2);
    park.addDinosaur(dino_2);
    const actual = park.findAllDinosOfSpecies('triceratops');
    assert.deepEqual(actual, [dino_2, dino_2]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dino_1);
    park.addDinosaur(dino_2);
    park.addDinosaur(dino_2);
    const actual = park.totalDailyVisitors();
    assert.strictEqual(actual, 90);
  });


  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dino_1);
    park.addDinosaur(dino_2);
    park.addDinosaur(dino_2);
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 32850);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dino_1);
    park.addDinosaur(dino_2);
    park.addDinosaur(dino_2);
    const actual = park.totalYearlyRevenue();
    assert.strictEqual(actual, 164250);
  });

});

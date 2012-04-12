var assert = require('should'),
    brain = require("../../lib/brain");

var data = [{input: [0, 0], output: [0]},
            {input: [0, 1], output: [1]},
            {input: [1, 0], output: [1]},
            {input: [1, 1], output: [1]}];

describe('thresholds' , function() {
  it('train until error threshold reached', function() {
    var net = new brain.NeuralNetwork();
    var error = net.train(data, 10000000, 0.2).error;
    assert.ok(error < 0.2, "network did not train until error threshold was reached");
  });

  it('train until max iterations reached', function() {
    var net = new brain.NeuralNetwork();
    var error = net.train(data, 1, 0.001).error;
    assert.ok(error > 0.001, "network trained past max iterations");
  })
})

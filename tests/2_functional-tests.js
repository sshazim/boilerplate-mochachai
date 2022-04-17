const chai = require('chai');
const assert = chai.assert;

const server = require('../server');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

suite('Functional Tests', function () {
  this.timeout(5000);
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /hello with no name', function (done) {
      chai
        .request(server)
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });
    // #2
    test('Test GET /hello with your name', function (done) {
      chai
        .request(server)
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello xy_z');
          done();
        });
    });
    // #3
    test('Send {name: "Cristoforo", surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .put('/travellers')
        .send({"surname": "Colombo"})
        .send({"name": "Cristoforo"})
        .end(function (err, res) {
          assert.equal(res.status, 200, 'response status should be 200');
          assert.equal(res.type, 'application/json', 'Response should be json');
          assert.equal(res.header['content-type'], 'application/json; charset=utf-8', 'Response should be json');
          assert.equal(
            res.body.name,
            'Cristoforo',
            'res.body.name should be "Christoforo"'
          );
          assert.equal(
            res.body.surname,
            'Colombo',
            'res.body.surname should be "Colombo"'
          );
          done();
        });
    });
    // #4
    test('Send {name: "Giovanni", surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .put('/travellers')
        .send({"surname": "da Verrazzano"})
        .send({"name": "Giovanni"})
        .end(function (err, res) {
          assert.equal(res.status, 200, 'response status should be 200');
          assert.equal(res.type, 'application/json', 'Response should be json');
          assert.equal(res.header['content-type'], 'application/json; charset=utf-8', 'Response should be json');
          assert.equal(
            res.body.name,
            'Giovanni',
            'res.body.name should be "Giovanni"'
          );
          assert.equal(
            res.body.surname,
            'da Verrazzano',
            'res.body.surname should be "da Verrazzano"'
          );
          done();
    });
  });
});

const Browser = require('zombie');

suite('Functional Tests with Zombie.js', function () {
  this.timeout(5000);

  suite('Headless browser', function () {
    test('should have a working "site" property', function() {
      assert.isNull(Browser.site);
    });
  });
});

  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      assert.equal();

      done();
    });
  });
    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.equal();

      done();

  });
});          
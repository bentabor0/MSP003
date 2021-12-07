var express = require('express');
var router = express.Router();

router.get('/form', function(req, res, next) {
  res.send({
    "tag": "<div class=\"card-form\" id=\"last-form\"><form class=\"zoo-form\" id=\"guest-group-from\"><div class=\"zoo-form-title\">Group Form</div><div class=\"zoo-form-body\"><div class=\"row\"><label class=\"label\" for=\"group-number\">Number of guests</label><input class=\"zooField\" type=\"number\" name=\"group-number\" id=\"group-number\"></div<div class=\"rule\"></div><div class=\"form-footer\"><button class=\"confrim-group-button\" type=\"button\">Admit Group</button></div></form></div>"
});
});

/* GET users listing. */
router.get('/zoo', function(req, res, next) {
  res.send({
    "name": "Ben's Zoo",
    "guestCount": 496,
    "animalCount": 0,
    "animals": [
    {
        "id": 1,
        "name": "Perry",
        "age": 2,
        "gender": "Female",
        "weight": 3.2,
        "isPregnant": false
    },
    {
        "id": 2,
        "name": "Harry",
        "age": 2,
        "gender": "Male",
        "weight": 3.2,
        "isPregnant": false
    },
    {
        "id": 3,
        "name": "Sherry",
        "age": 2,
        "gender": "Female",
        "weight": 852,
        "isPregnant": true
    },
    {
        "id": 4,
        "name": "Cherry",
        "age": 2,
        "gender": "Female",
        "weight": 3.2,
        "isPregnant": true
    }],
    "guests": [
    {
        "id": 1,
        "name": "Ben",
        "age": 22,
        "gender": "Male",
        "moneyAmount": 100
    },
    {
        "id": 2,
        "name": "Ally",
        "age": 20,
        "gender": "Female",
        "moneyAmount": 200
    },
    {
        "id": 3,
        "name": "Jacob",
        "age": 21,
        "gender": "Male",
        "moneyAmount": 20
    },
    {
        "id": 4,
        "name": "Sierra",
        "age": 25,
        "gender": "Female",
        "moneyAmount": 35
    }]
});
});

module.exports = router;

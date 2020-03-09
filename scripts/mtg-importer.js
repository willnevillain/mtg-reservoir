const fs = require('fs');
const path = require('path');
const Printing = require('../app/models/printing');
const Set = require('../app/models/set');

const filePath = path.resolve(__dirname, '../data/AllPrintings.json');

module.exports = () => {
  const contents = JSON.parse(fs.readFileSync(filePath));
  Object.keys(contents).map(setId => contents[setId]).forEach(set => {
    Set.create({ ...set });
    set.cards.forEach(card => {
      card.printing = set.code;
      Printing.create({ ...card });
    });
  });
};



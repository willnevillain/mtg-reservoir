const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // Schema definition
  const catSchema = new mongoose.Schema({
    name: String,
    color: String
  });

  // Schema methods - note to not use arrow function as they treat 'this' differently
  catSchema.methods.meow = function () {
    console.log('Feed me bitch or else you will forever rue the day you crossed ' + this.name);
  };

  // Compile model and make an instance
  const Cat = mongoose.model('Cat', catSchema);
  
  const winslow = new Cat({ name: 'Winslow', color: 'Grey and Brown' });
  winslow.save((err, winslow) => {
    if (err) return console.error(err);
    winslow.meow();
  });

  const bundles = new Cat({ name: 'Bundles', color: 'Black' });
  bundles.save((err, bundles) => {
    if (err) return console.error(err);
    bundles.meow();
  });

  Cat.find((err, cats) => {
    if (err) return console.error(err);
    console.log(cats);
  });

  Cat.find({ name: /^Winslow/ }, (err, cats) => {
    if (err) return console.error(err);
    console.log(cats);
  });
});

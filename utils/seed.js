const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const users = [
    { name: 'Tina Stringer', email: 'tinastringerr@gmail.com', friends: []},
    { name: 'Celina', email: 'cjubera@gmail.com', friends: []},
  ];

  await User.collection.insertMany(users);
  
  const thoughts = [
    { thoughtText: 'I need a nap.', userId: users[1]._id },
    { thoughtText: 'I love the fourth of July!', userId: users[0]._id },
  ];
  
  await Thought.collection.insertMany(thoughts);



  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete');
  process.exit(0);
});
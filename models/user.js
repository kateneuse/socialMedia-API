const { Schema, model, Query } = require('mongoose');
const Thought = require('./Thought.js');

const userSchema = new Schema({
  name: { type: String, trimmed: true, unique: true, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
});

userSchema.virtual('friendCount').get(function() {
  return this.friends?.length;
});

const User = model('User', userSchema);

module.exports = User;
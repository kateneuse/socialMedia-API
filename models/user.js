const { Schema, model } = require('mongoose');
//using Scehma to create User model
const userSchema = new Schema({
    name: { type: String,
        unique: true,
        required: true,
        trimmed: true},
    email: {
        type: String, 
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId, ref: 'Thought'
    }],

    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}],
},
// including virtuals
{ 
    toJSON: {
        virtuals: true,
    },
    id: false,

});
//creating virtual property
userSchema
    .virtual('friendCount').get(function () {
        return this.friends.length;
    });
//getter
    const User = model ('User', userSchema);

    module.exports = User;
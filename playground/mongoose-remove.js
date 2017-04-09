const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '58ea0cd09e76af8d40de63a8'}).then((todo) => {

});

Todo.findByIdAndRemove('58ea0cd09e76af8d40de63a8').then((todo) => {
  console.log(todo);
});

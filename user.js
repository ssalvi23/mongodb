const connect = require('./db');

async function createUser(user) {
  const db = await connect();
  const result = await db.collection('users').insertOne(user);
  console.log('created')
  console.log('User created:', result.insertedId);
  return result.insertedId;
}

async function getUsers() {
  const db = await connect();
  const users = await db.collection('users').find().toArray();
  console.log('get')
  console.log('Users:', users);
  return users;
}

async function updateUser(id, user) {
  const db = await connect();
  const result = await db.collection('users').updateOne({ _id: id }, { $set: user });
  console.log('update')
  console.log('User updated:', result.modifiedCount);
  return result.modifiedCount;
}

async function deleteUser(id) {
  const db = await connect();
  const result = await db.collection('users').deleteOne({ _id: id });
  console.log('delete')
  console.log('User deleted:', result.deletedCount);
  return result.deletedCount;
}

module.exports = { createUser, getUsers, updateUser, deleteUser };

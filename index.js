const { createUser, getUsers, updateUser, deleteUser } = require('./user');

async function main() {
  // Create a new user
  const newUser = { name: 'John Doe', email: 'john@example.com' };
  const userId = await createUser(newUser);

  // Retrieve all users
  await getUsers();

  // Update a user
  const updatedUser = { name: 'Jane Doe', email: 'jane@example.com' };
  await updateUser(userId, updatedUser);

  // Retrieve all users after update
  await getUsers();

  // Delete a user
  await deleteUser(userId);

  // Retrieve all users after delete
  await getUsers();
}

main().catch(console.error);

// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  const user = {
    username,
    email,
    isActive: true,
    loginCount: 0,
  }

  return user;
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
  user.loginCount++;
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;

  return user;
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {
  const clonedUser = { ...user };
  return clonedUser;
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};

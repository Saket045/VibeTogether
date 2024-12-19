function sanitizeUserResponse(user) {
  let userObj;

  // Check if user is a Mongoose document and convert it to a plain object
  if (typeof user.toObject === 'function') {
    userObj = user.toObject();
  } else {
    // If user is already a plain object, use it directly
    userObj = user;
  }

  // Remove sensitive and unnecessary fields
  delete userObj.password;
  delete userObj.phonenumber;
  delete userObj.__v;

  // Remove nested fields if userProfile exists
  if (userObj.userProfile) {
    delete userObj.userProfile.__v;
    delete userObj.userProfile._id;
  }

  delete userObj._id; // If you don't want to send the user's MongoDB _id
  return userObj;
}

// Exporting function as per ES6 module syntax
export default sanitizeUserResponse;

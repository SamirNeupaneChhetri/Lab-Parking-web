const User = require('../Models/UserModel.js');
const bcrypt = require('bcrypt');
const zxcvbn = require('zxcvbn');

const test = (req, res) => {
  res.json({
    message: 'API is working!'
  });
};

const signup = async (req, res) => {
  const { email, password, name } = req.body;

  
  // Use zxcvbn to evaluate password strength
  const passwordStrength = zxcvbn(password);
  const minScore = 3 // minimum score for a "strong" password

  if (passwordStrength < minScore) {
    return res.status(400).json({ 
      message: 'Password is too week . It must be 8 Characters',
      suggestions: passwordStrength.feedback.suggestions, // Provide suggestions to improve the password
      warning: passwordStrength.feedback.warning  // Provide a warning if there is one

    })
  }

  try {
    const existingUser = await User.findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists'});
    }

    // Hash the password before saving it to the database
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newUser = await User.CreateUser(email, hashedPassword, name);
    res.status(201).json({ message: `User | ${newUser.email} | created` });
  } catch (error) {
    console.error(`Error During Signup: ${error.message}`);
    res.status(500).json({ message: 'Server Error' });
  }
}


const login = async (req, res) => {
  const { email, password} = req.body;
  try {
    const user = await User.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the plain-text password with the hashed password in the database
    const passwordmatch = await bcrypt.compare(password, user.password);

    if (!passwordmatch) {
      return res.status(401).json( { message: 'Invalid Password' })
    }

    // If password is correct
    res.status(200).json({ message: 'Login successful', user: user.name, email: user.email });

  } catch (error) {
    console.error(`Error during Login: ${error.message}`);
    res.status(500).json({ message: 'Server Error' });
  }
}


const getAllUsers = async (req, res) => {
  try {
      const users = await User.getAllUsers();
      res.status(200).json(users);
  } catch (error) {
      console.error(`Error fetching users: ${error.message}`);
      res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  test,
  signup,
  login,
  getAllUsers
}
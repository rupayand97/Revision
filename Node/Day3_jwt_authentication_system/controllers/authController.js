const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config/jwt");

const users = [];

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  const token = jwt.sign(
    { id: newUser.id, email: newUser.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.status(201).json({
    message: "Signup successful",
    token
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  res.json({ token });
};

//protected
exports.profile = (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user
  });
};
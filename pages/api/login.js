import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    // check to see if user exists with provided email
    const user = await User.findOne({ email }).select("+password");
    // if not, return error
    if (!user) {
      res.status(404).send("No user exists with that email");
    }
    // check to see if user's password matches one in database
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // if so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d"
      });
      // send token to client
      res.status(200).json(token);
    } else {
      res.status(401).send("Passwords do not match");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in user");
  }
};

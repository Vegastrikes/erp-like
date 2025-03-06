import User from "../db/models/user.js";
import { hash, compare } from 'bcrypt';

export const create = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
        username: username,
        password: hashedPassword
    })

    return res.status(201).json({message: 'User created', user: newUser.sanitize()})
  } catch (error) {
      return res.status(500).json({message: 'Internal Error'})
  }

}
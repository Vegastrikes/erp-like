import { User } from "../db/models/models.js";
import { hash, compare } from 'bcrypt';

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error;
    }

    const user = await User.findOne({where: {username: username}});
    const match = await compare(password, user.password);

    if (!match) {
      throw new Error;
    }

    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).send('Internal server error')
      }

      req.session.userId = user.id;
      return res.send({message: 'Login successful'});
    })
  } catch (error) {
    return res.status(500).json({message: 'Login failed'});
  }
}

export const create = async (req, res) => { //WIP
  try {
    console.log('session create: ', req.session);
    res.send({message: "haha"});
    // const { username, password } = req.body;
    // if (!username || !password) {
    //   throw new Error;
    // }
    // const hashedPassword = await hash(password, 10);

    // const newUser = await User.create({
    //     username: username,
    //     password: hashedPassword
    // });

    // return res.status(201).json({message: 'User created', user: newUser.sanitize()});
  } catch (error) {
      return res.status(500).json({message: 'Internal Error'});
  }
}
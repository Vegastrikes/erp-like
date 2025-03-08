import { User, Role } from './models/models.js'
import { hash } from 'bcrypt';

export default async function seed() {
  await Role.findOrCreate({where: {role: 'Admin'}});
  await Role.findOrCreate({where: {role: 'User'}});

  const uuid = process.env.ADMIN_UUID || '3b92d29e-536b-4161-ae34-9b962272542f';
  const username = process.env.ADMIN_USERNAME || 'TestAdmin';
  const password = process.env.ADMIN_PASSWORD || 'pass';
  const hashedPassword = await hash(password, 10);
  await User.findOrCreate({where: {id: uuid}, defaults: {
    username: username,
    password: hashedPassword,
    RoleId: 1
  }});
}
import { User, Role } from './models/models.js'
import { hash } from 'bcrypt';

export default async function seed() {
  await Role.findOrCreate({where: {role: 'Admin'}});
  await Role.findOrCreate({where: {role: 'User'}});

  const uuid = '3b92d29e-536b-4161-ae34-9b962272542f';
  const password = await hash('pass', 10);
  await User.findOrCreate({where: {id: uuid, username: 'TestAdmin', password: password, RoleId: 1}});
}
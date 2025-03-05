import { Model, DataType, BelongsTo, Table, Column, Default, AllowNull, PrimaryKey } from 'sequelize-typescript';
import sequelize from '../database.js';
import { hash, compare } from 'bcrypt';

@Table
export class User extends Model<User> {
  @Column
  @AllowNull(false)
  username!: string;

  @Column
  @AllowNull(false)
  password!: string;
}

sequelize.addModels([User]);
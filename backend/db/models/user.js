import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';
import Role from './role.js';

class User extends Model {
    sanitize() {
        return {
            id: this.id,
            username: this.username
        }
    }
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
)

Role.hasOne(User, {
    foreignKey: {
        allowNull: false
    }
});

export default User;
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize.js';

class Role extends Model {
}

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        sequelize,
        modelName: 'Role'
    }
)

export default Role;
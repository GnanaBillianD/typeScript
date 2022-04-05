import { DataTypes, Model, ModelDefined, Sequelize } from 'sequelize';
import { UserAttributes, UserCreationAttributes } from '../types/user';

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}

type UserModelDefined = ModelDefined<UserAttributes, UserCreationAttributes>;

function User(sequelize: Sequelize): UserModelDefined {
  return sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 100],
            msg: 'Name sould be greater than 3 and less than or equal to 100'
          },
          notNull: {
            msg: 'Name should be present'
          },
          is: {
            args: [/^[\A-Za-z][\w\-|\s]*[\w\-]$/],
            msg: 'Name should be valid format. No special characters allowed other than _-space characters'
          }
        }
      }
    },
    {
      tableName: 'users',
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    }
  ) as UserModelDefined;
}
export default User;

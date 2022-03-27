import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("sqlite:./data/database.sqlite");

class ToDo extends Model {}

ToDo.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: DataTypes.TEXT,
    complete: DataTypes.BOOLEAN,
    dueDate: DataTypes.DATE,
  },
  {
    sequelize,
  }
);

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, allowNull: false },
    street: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    zip: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
  }
);

await sequelize.sync();

export { ToDo, User };

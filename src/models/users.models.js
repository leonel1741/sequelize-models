const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: (user, options) => {
      const { password } = user;
      const has = bcrypt.hashSync(password, 8); // Devuelve las contraseñas en un has(Encriptadas).
      user.password = has;
    }
  }
});

module.exports = Users;

// crear el modelo para tasks --> ponerlo dentro de initModels para que
// se cree la tabla en la base de datos

// Antes de crear un usuario necesitabamos hashear la contraseña

// Ya esta registrado el usuario
// login --> Ingresar con email y usuario
// 
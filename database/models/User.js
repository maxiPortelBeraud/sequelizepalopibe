const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.js');

class User extends Model { }

User.init({
    name:{
        type: DataTypes.STRING,
        allowNull: { //No permite que el campo sea "null"
            args: false,
            msg: 'El campo no puede estar vacío'
        }, 

        validate: {  //Validaciones de la base de datos
            isAlpha: { //isAlpha solo deja usar letras
                args: true,
                msg: 'Solo debe contener letras'
            },
            len: { //len establece el minimo y maximo de caracteres
                args: [2,100],
                msg: 'Debe contener minimo 2 caracteres'
            }
        }
    },


    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail:{
                args: true,
                msg: 'Debe ser un correo valido'
            }
        }
    },
    age:{
        type: DataTypes.INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: 'Debe ser en numeros'
            },
            min: {
                args: 18,
                msg: 'Debe ser mayor a 18 años'
            },
            max: {
                args: 120,
                msg: 'Debe ser una edad real'
            }
        }
    },
    //0 = user / 1 = admin
    role:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    sequelize, 
    modelName: "users",
    //timestamps: false
});

module.exports = User;

/* // the defined model is the class itself
console.log(User === sequelize.models.User); // true */
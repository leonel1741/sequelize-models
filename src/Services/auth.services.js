const Users = require("../models/users.models");
const bcrypt = require("bcrypt");

class AuthServices {
    static async login(email, password) {
        try {
            const result = await Users.findOne({
                where: { email }
            });
            if (result) {
                const isValid = bcrypt.compareSync(password, result.password);
                return {isValid, result};
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = AuthServices;

// El servidor busca en la bd al usuario con email que mandamos para obtener la contraseña (hash)
// Comparacion(password, hash)
// Es correcta --> generar el jwt y enviarlo como respuesta
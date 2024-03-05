require('dotenv').config();
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { Provider, User } = require('../Database/database');
const secretKey = process.env.JWT_SECRET_KEY2;
const {registerProv, registerUser} = require('../Services/mailerServices')

const router = Router();

router.get('/', async (req, res) => {
    const { token } = req.query;

    jwt.verify(token, secretKey, async (err) => {
        if (err) {
            res.status(400).send('<h1>Token inválido o expirado</h1>');
        } else {
            try {
                const user = await User.findOne({ where: { verificationToken: token } });
                const provider = await Provider.findOne({ where: { verificationToken: token } });

                if (user) {
                    user.isActive = true;
                    await user.save();
                    await registerUser(user.name, user.email, user.lastName);
                    console.log("ya lo cambie")
                    res.redirect('https://dev.serviapp.solutions');
                } else if (provider) {
                    provider.isActive = true;
                    await provider.save();
                    await registerProv(provider.name, provider.email, provider.lastName);
                    console.log("ya lo cambie")
                    res.redirect('https://dev.serviapp.solutions');
                } else {
                    res.status(404).send('<h1>Usuario o proveedor no encontrado</h1>');
                }
            } catch (error) {
                console.error(error);
                res.status(500).send('<h1>Error al actualizar el estado</h1>');
            }
        }
    });
});

module.exports = router;

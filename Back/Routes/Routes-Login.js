require('dotenv').config();
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { Provider, User } = require('../Database/database');

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const secretKey = process.env.JWT_SECRET_KEY;

    const provider = await Provider.findOne({ where: { email, password } });
    if (provider) {
        if (!provider.isActive) {
            return res.status(403).send('La cuenta no está activa!');
        }
        const token = jwt.sign({ email, role: 'provider' }, secretKey, { expiresIn: '1h' });
        return res.json({ token, role: 'provider', id: provider.id_prov });
    }

    const user = await User.findOne({ where: { email, password } });
    if (user) {
        if (!user.isActive) {
            return res.status(403).send('La cuenta no está activa!');
        }
        const token = jwt.sign({ email, role: 'user' }, secretKey, { expiresIn: '1h' });
        return res.json({ token, role: 'user', id: user.id_user });
    }
    
    res.status(401).send('Try again');
});

module.exports = router;


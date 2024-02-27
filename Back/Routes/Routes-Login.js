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
        const token = jwt.sign({ email, role: 'provider' }, secretKey, { expiresIn: '1h' });
        return res.json({ token, role: 'provider' });
    }

    const user = await User.findOne({ where: { email, password } });
    if (user) {
        const token = jwt.sign({ email, role: 'user' }, secretKey, { expiresIn: '1h' });
        return res.json({ token, role: 'user' });
    }
    
    res.status(401).json({ message: 'Try again' });
});

module.exports = router;

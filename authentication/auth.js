const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.redirect('/login');
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.redirect('/login');
    }
    next();
};

const isCandidate = (req, res, next) => {
    if (req.user.role !== 'candidate') {
        return res.redirect('/login');
    }
    next();
};

module.exports = { auth, isAdmin, isCandidate };

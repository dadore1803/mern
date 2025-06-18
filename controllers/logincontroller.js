const User = require('../models/signupmodel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (username === 'admin@gmail.com' && password === "admin@1234") {
            const token = jwt.sign(
                { role: 'admin', username: username },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            );

            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "strict",
                secure: false
            });

            return res.send("admin");
        }

        // Check for candidate user
        const existUser = await User.findOne({ username: username });

        if (!existUser) {
            return res.send("User not found");
        }

        const isMatch = await bcrypt.compare(password, existUser.password);
        if (!isMatch) {
            return res.send("Incorrect password");
        }

        const token = jwt.sign(
            { role: 'candidate', id: existUser._id, username: existUser.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: false
        });

        res.send("candidate");

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}

module.exports = loginUser;

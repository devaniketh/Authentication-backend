const express = require('express');
const zod = require('zod');

const app = express();
app.use(express.json());

function Validation(req, res, next) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6)
    });

    const response = schema.safeParse(req.body);

    if (!response.success) {
        return res.status(411).json({
            msg: "Input is invalid",
            errors: response.error.errors
        });
    }

    next();
}

app.post('/hello', Validation, function (req, res) {
    res.json({
        msg: "Validation successful!",
        data: req.body
    });
});

app.listen(3000)
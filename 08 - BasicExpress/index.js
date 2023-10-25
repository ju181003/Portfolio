const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    if (isNaN(weight) || isNaN(height)) {
        return res.send("Please, enter valid weight and height values.");
    }

    const bmi = calculateBMI(weight, height);
    res.send(`Your BMI is: ${bmi}`);
});

function calculateBMI(weight, height) {
    // BMI formula: BMI = weight (kg) / (height (m) ^ 2)
    const bmi = weight / Math.pow(height / 100, 2);
    return bmi.toFixed(2);
}

app.listen(port, () => {
    console.log("Listening on port " + port);
});

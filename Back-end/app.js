const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/products', (req, res) => {
    const { category, price } = req.query;
    res.send(`Products Page`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

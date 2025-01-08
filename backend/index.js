const express = require('express');
const cors = require('cors');
const data = require('./data/dataset.json');

const app = express();
app.use(cors());

app.get('/data', (req, res) => {
    const type = req.query.type;
    if (data[type]) {
        res.json(data[type]);
    } else {
        res.status(404).send('Data type not found');
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

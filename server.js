const express = require('express');
const app = express();

const PORT = 4000;
app.get('/', (req, res) => {
    res.send('HELLO FROM EXPRESS');
});

app.listen(PORT, () => console.log('listening on port', PORT));

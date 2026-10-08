const express = require('express');
const app = express();

// Rota ou endpoint 
                //request & response
app.get('/ping', (req, res) => {
    return res.json({message: 'pong' });
})

app.listen(3000, () => {
    console.log('Servidor rodando....na porta: http://localhost:3000');
})
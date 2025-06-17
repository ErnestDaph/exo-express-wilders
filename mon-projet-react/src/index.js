const express = require('express');
const app = express();
const port = 3001;

// Middleware pour lire le JSON
app.use(express.json());

// Exemple de route GET
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur backend !');
});

// Exemple de route POST
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Données reçues', data });
});

app.listen(port, () => {
  console.log(`Serveur backend lancé sur http://localhost:${port}`);
});
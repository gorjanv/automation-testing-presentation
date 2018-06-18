import express from 'express';
import path from 'path';

const app = express();

app.use(express.json());

app.use('/static', express.static(path.resolve(__dirname, 'static')));

app.post('/api/signin', (req, res) => {
  const { userName, password } = req.body;
  if (userName === 'admin@testapp.com' && password === 'secret') {
    res.status(200).json({ authorized: true });
  } else {
    res.status(401).json({ authorized: false });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Ответ сервера'
  });
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на порте ${PORT}`);
});

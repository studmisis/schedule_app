const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { Discipline, User } = require('../db/models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Ответ сервера',
  });
});

// Получить все предметы
app.get('/api/disciplines', async (req, res) => {
  try {
    const disciplines = await Discipline.findAll();
    res.json(disciplines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password_hash'] },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}`);
});

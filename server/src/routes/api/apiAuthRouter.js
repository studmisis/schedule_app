import express from 'express';
import bcrypt from 'bcrypt';
import db from '../../../db/models/index.js';
import generateTokens from '../../utils/generateTokens.js';
import cookiesConfig from '../../config/cookiesConfig.js';
import { verifyAccessToken } from '../../middlewares/verifyTokens.js';
import { checkRole } from '../../middlewares/checkRole.js';

const { User } = db;

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!(login && password)) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    }

    const user = await User.findOne({ where: { login } });

    if (!user) {
      return res.status(403).json({ message: 'Неверный логин или пароль' });
    }

    const correctPass = await bcrypt.compare(password, user.password_hash);

    if (!correctPass) {
      return res.status(403).json({ message: 'Неверный логин или пароль' });
    }

    if (!user.is_active) {
      return res.status(403).json({ message: 'Обратитесь к администратору' });
    }

    const plainUser = user.get();
    delete plainUser.password_hash;

    const { accessToken, refreshToken } = generateTokens({ user: plainUser });

    return res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Ошибка сервера',
    });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').sendStatus(200);
});

router.get('/check', verifyAccessToken, (req, res) => {
  console.log(res.locals.user);
  res.json({ message: 'Доступ разрешён' });
});

router.get('/admin-check', verifyAccessToken, checkRole('admin'), (req, res) => {
  res.json({ message: 'Ты администратор!' });
});

export default router;

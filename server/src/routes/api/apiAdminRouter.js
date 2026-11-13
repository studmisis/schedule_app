import express from 'express';
import db from '../../../db/models/index.js';
import { verifyAccessToken } from '../../middlewares/verifyTokens.js';
import { checkRole } from '../../middlewares/checkRole.js';

const { User, Group, Teacher, Student } = db;

const router = express.Router();

router.get('/dashboard', verifyAccessToken, checkRole('admin'), async (req, res) => {
  try {
    const groups = await Group.findAll({
      include: [
        {
          model: Student,
          as: 'students',
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'login', 'full_name'],
            },
          ],
        },
      ],
    });

    const teachers = await Teacher.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'login', 'full_name'],
        },
      ],
    });

    return res.status(200).json({ groups, teachers });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Ошибка при загрузке административной панели',
    });
  }
});

export default router;

'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface) {
    const now = new Date();

    // 1. Создаём пользователей
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        login: 'admin',
        password_hash: await bcrypt.hash('admin', 10),
        role: 'admin',
        full_name: 'Администратор',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        login: 'teacher',
        password_hash: await bcrypt.hash('teacher', 10),
        role: 'teacher',
        full_name: null,
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        login: 'student',
        password_hash: await bcrypt.hash('student', 10),
        role: 'student',
        full_name: null,
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 2. Создаём преподавателей
    await queryInterface.bulkInsert('Teachers', [
      {
        id: 1,
        full_name: 'Иванов Иван Иванович',
        contacts: '@AAAAaaaa',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        full_name: 'Петрова Анна Сергеевна',
        contacts: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        full_name: 'Сидоров Алексей Петрович',
        contacts: null,
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 3. Создаём дисциплины
    await queryInterface.bulkInsert('Disciplines', [
      {
        id: 1,
        name: 'Математика',
        description: 'Математические дисциплины',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        name: 'Программирование',
        description: 'Основы программирования',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        name: 'Базы данных',
        description: 'Реляционные базы данных и SQL',
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 4. Создаём занятия
    await queryInterface.bulkInsert('Lessons', [
      {
        date: '2026-10-20',
        start_time: '09:00:00',
        discipline_id: 1,
        teacher_id: 1,
        user_id: 1,
        topic: 'Производные функций',
        join_url: 'https://example.com/math',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        date: '2026-10-20',
        start_time: '11:00:00',
        discipline_id: 2,
        teacher_id: 2,
        user_id: 1,
        topic: 'Основы JavaScript',
        join_url: 'https://example.com/javascript',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        date: '2026-10-21',
        start_time: '10:00:00',
        discipline_id: 3,
        teacher_id: 3,
        user_id: 1,
        topic: 'Основы SQL',
        join_url: 'https://example.com/sql',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Lessons', null, {});
    await queryInterface.bulkDelete('Disciplines', null, {});
    await queryInterface.bulkDelete('Teachers', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};

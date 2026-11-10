
'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface) {
    const now = new Date();

    // 1. Пользователи
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
        login: 'teacher1',
        password_hash: await bcrypt.hash('teacher1', 10),
        role: 'teacher',
        full_name: 'Иванов Иван Иванович',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        login: 'teacher2',
        password_hash: await bcrypt.hash('teacher2', 10),
        role: 'teacher',
        full_name: 'Петрова Анна Сергеевна',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 4,
        login: 'teacher3',
        password_hash: await bcrypt.hash('teacher3', 10),
        role: 'teacher',
        full_name: 'Сидоров Алексей Петрович',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 5,
        login: 'student1',
        password_hash: await bcrypt.hash('student1', 10),
        role: 'student',
        full_name: 'Александр Смирнов',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 6,
        login: 'student2',
        password_hash: await bcrypt.hash('student2', 10),
        role: 'student',
        full_name: 'Мария Иванова',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 7,
        login: 'student3',
        password_hash: await bcrypt.hash('student3', 10),
        role: 'student',
        full_name: 'Дмитрий Кузнецов',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 8,
        login: 'student4',
        password_hash: await bcrypt.hash('student4', 10),
        role: 'student',
        full_name: 'Елена Попова',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 9,
        login: 'student5',
        password_hash: await bcrypt.hash('student5', 10),
        role: 'student',
        full_name: 'Артём Соколов',
        is_active: true,
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 2. Преподаватели
    await queryInterface.bulkInsert('Teachers', [
      {
        id: 1,
        user_id: 2,
        full_name: 'Иванов Иван Иванович',
        contacts: '@ivanov',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        user_id: 3,
        full_name: 'Петрова Анна Сергеевна',
        contacts: '@petrova',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        user_id: 4,
        full_name: 'Сидоров Алексей Петрович',
        contacts: '@sidorov',
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 3. Учебная группа
    await queryInterface.bulkInsert('Groups', [
      {
        id: 1,
        name: 'Группа 101',
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 4. Студенты
    await queryInterface.bulkInsert('Students', [
      {
        id: 1,
        user_id: 5,
        group_id: 1,
      },
      {
        id: 2,
        user_id: 6,
        group_id: 1,
      },
      {
        id: 3,
        user_id: 7,
        group_id: 1,
      },
      {
        id: 4,
        user_id: 8,
        group_id: 1,
      },
      {
        id: 5,
        user_id: 9,
        group_id: 1,
      },
    ]);

    // 5. Дисциплины
    await queryInterface.bulkInsert('Disciplines', [
      {
        id: 1,
        name: 'Математика',
        description: 'Математические дисциплины',
        teacher_id: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        name: 'Программирование',
        description: 'Основы программирования',
        teacher_id: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        name: 'Базы данных',
        description: 'Реляционные базы данных и SQL',
        teacher_id: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 4,
        name: 'Веб-разработка',
        description: 'HTML, CSS и JavaScript',
        teacher_id: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 5,
        name: 'Алгоритмы',
        description: 'Алгоритмы и структуры данных',
        teacher_id: 1,
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // 6. Занятия
    await queryInterface.bulkInsert('Lessons', [
      {
        id: 1,
        date: '2026-11-11',
        start_time: '09:00:00',
        discipline_id: 1,
        teacher_id: 1,
        group_id: 1,
        created_by: 1,
        topic: 'Производные функций',
        join_url: 'https://example.com/math',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        date: '2026-11-11',
        start_time: '11:00:00',
        discipline_id: 2,
        teacher_id: 2,
        group_id: 1,
        created_by: 1,
        topic: 'Основы JavaScript',
        join_url: 'https://example.com/javascript',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 3,
        date: '2026-11-12',
        start_time: '10:00:00',
        discipline_id: 3,
        teacher_id: 3,
        group_id: 1,
        created_by: 1,
        topic: 'Основы SQL',
        join_url: 'https://example.com/sql',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 4,
        date: '2026-11-12',
        start_time: '12:00:00',
        discipline_id: 4,
        teacher_id: 2,
        group_id: 1,
        created_by: 1,
        topic: 'Создание веб-страниц',
        join_url: 'https://example.com/web',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 5,
        date: '2026-11-13',
        start_time: '09:00:00',
        discipline_id: 5,
        teacher_id: 1,
        group_id: 1,
        created_by: 1,
        topic: 'Основы алгоритмов',
        join_url: 'https://example.com/algorithms',
        recording_url: null,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Lessons', null, {});
    await queryInterface.bulkDelete('Disciplines', null, {});
    await queryInterface.bulkDelete('Students', null, {});
    await queryInterface.bulkDelete('Teachers', null, {});
    await queryInterface.bulkDelete('Groups', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};

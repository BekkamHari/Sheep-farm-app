
import bcrypt from 'bcrypt';
import { sequelize, Animal, HealthRecord, User, Role, FeedSchedule } from '../models';

async function seed(){
  await sequelize.sync({ force: true });

  const adminRole = await Role.create({ name: 'admin' });
  const userRole = await Role.create({ name: 'user' });

  const admin = await User.create({
    username: 'admin',
    passwordHash: await bcrypt.hash('farmadmin', 10),
    roleId: adminRole.id
  });

  const a1 = await Animal.create({
    tag: 'S-001', species: 'sheep', breed: 'Merino', dob: '2021-03-01', gender: 'female'
  });
  const a2 = await Animal.create({
    tag: 'G-001', species: 'goat', breed: 'Boer', dob: '2022-06-15', gender: 'male'
  });
  await HealthRecord.create({ animalId: a1.id, date: '2024-12-01', type: 'vaccination', description: 'CDT vaccine', treatment: 'none' });
  await HealthRecord.create({ animalId: a2.id, date: '2025-02-10', type: 'treatment', description: 'foot rot', treatment: 'antibiotics and foot bath' });

  await FeedSchedule.create({ name: 'Morning Feed', cronExpression: '0 8 * * *', target: 'all', notes: '08:00 every day' });
  await FeedSchedule.create({ name: 'Evening Feed', cronExpression: '0 18 * * *', target: 'all', notes: '18:00 every day' });

  console.log('Seed complete');
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });

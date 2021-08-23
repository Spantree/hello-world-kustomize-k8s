import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.counter.create({ data: { name: 'first-counter' } });
};

export default seed;

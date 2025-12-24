import 'server-only';
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from '@/../prisma/generated/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter
  });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const db = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default db;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db;
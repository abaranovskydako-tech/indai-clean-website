// Prisma Client singleton (per MASTER_SPEC §12)
// Deferred: No queries or side effects. Scaffold only.
// Active use begins with Lead System implementation.
//
// IMPORTANT: Uncomment when Prisma models are defined in prisma/schema.prisma
// and DATABASE_URL is configured. Until then, this file is inert to avoid
// build failures on Vercel (prisma generate requires models).
//
// import { PrismaClient } from '@prisma/client';
//
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };
//
// export const prisma = globalForPrisma.prisma ?? new PrismaClient();
//
// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma;
// }
//
// export default prisma;

import { PrismaClient } from '@/generated/prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg(process.env.DATABASE_URL as string);
    super({ adapter });
  }
}

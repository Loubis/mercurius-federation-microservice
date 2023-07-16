import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ServiceAModule } from './service-a.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ServiceAModule,
    new FastifyAdapter(),
  );
  await app.listen(3001);
}

bootstrap();

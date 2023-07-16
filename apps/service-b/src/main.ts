import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ServiceBModule } from './service-b.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ServiceBModule,
    new FastifyAdapter(),
  );
  await app.listen(3002);
}

bootstrap();

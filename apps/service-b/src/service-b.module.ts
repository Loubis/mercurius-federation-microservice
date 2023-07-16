import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusFederationDriverConfig,
  MercuriusFederationDriver,
} from '@nestjs/mercurius';
import { BResolver } from './service-b.resolver';
import { BService } from './service-b.service';
import { A } from './a.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [A],
      },
    }),
  ],
  providers: [BResolver, BService],
})
export class ServiceBModule {}

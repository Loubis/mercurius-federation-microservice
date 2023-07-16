import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusGatewayDriver,
  MercuriusGatewayDriverConfig,
} from '@nestjs/mercurius';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusGatewayDriverConfig>({
      driver: MercuriusGatewayDriver,
      graphiql: true,
      gateway: {
        pollingInterval: 1000,
        services: [
          {
            name: 'serivce-a',
            url: 'http://localhost:3001/graphql',
          },
          {
            name: 'serivce-b',
            url: 'http://localhost:3002/graphql',
          },
        ],
      },
    }),
  ],
})
export class GatewayModule {}

import { Module } from '@nestjs/common';
import { ClientController } from './api/controllers/client.controller';
import { ClientService } from './domain/client.service';
import { ClientRepositoryImpl } from './infraestructure/client.repositoryimlp';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './domain/client';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService, ClientRepositoryImpl
    //   {
    //   provide: 'ClientRepository',
    //   useClass: ClientRepositoryImpl
    // }
  ],
})
export class ClientModule { }

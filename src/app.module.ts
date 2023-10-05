import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { Client } from './client/domain/client';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandsModule } from './commands/commands.module';
import { QuerysModule } from './querys/querys.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ClientModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      database: 'banki',
      entities: [Client],
      synchronize: true,
    }),
    CommandsModule,
    QuerysModule,
    CoreModule,
    CommonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

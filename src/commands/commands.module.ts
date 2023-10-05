import { Module } from '@nestjs/common';
import { OpenAccountController } from './api/controller/open-account.controller';
import { CloseAccountController } from './api/controller/close-account.controller';
import { DepositFundsController } from './api/controller/deposit-funds.controller';
import { WithdrawFundsController } from './api/controller/withdraw-funds.controller';
import { OpenAccountHandlerService } from './api/commands/open-account-handler.service';
import { CqrsModule } from "@nestjs/cqrs";
import { CloseAccountHandlerService } from './api/commands/close-account-handler.service';

@Module({
  imports: [
    CqrsModule
  ],
  controllers: [OpenAccountController, CloseAccountController, DepositFundsController, WithdrawFundsController],
  providers: [OpenAccountHandlerService, CloseAccountHandlerService]
})
export class CommandsModule { }

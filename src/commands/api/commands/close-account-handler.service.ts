import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CloseAccountCommand } from "./close-account-command";

@CommandHandler(CloseAccountCommand)

export class CloseAccountHandlerService implements ICommandHandler<CloseAccountCommand> {
    execute(command: CloseAccountCommand): Promise<any> {

        console.info("CloseAccountHandlerService/execute");
        console.info(command);

        throw new Error('Method not implemented.');
    }
}

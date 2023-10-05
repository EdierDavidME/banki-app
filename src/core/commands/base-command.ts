import { Messages } from "../message/messages";

export class BaseCommand extends Messages {

    constructor(
        public id: string
    ) {
        super(id)
    }


}

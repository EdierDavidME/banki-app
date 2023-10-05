import { Client } from "./client";

export interface ClientRepository {
    createClient(client: Client): Promise<void>;

    findAllClients(): Promise<Client[]>;

    findClientByDni(dni: string):  Promise<Client>;
}
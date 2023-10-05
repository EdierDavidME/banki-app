import { Injectable } from "@nestjs/common";
import { Client } from "../domain/client";
import { ClientRepository } from "../domain/client.repositoy";
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientRepositoryImpl implements ClientRepository {

    constructor(
        @InjectRepository(Client)
        private readonly typeOrmRepository: MongoRepository<Client>
    ) { }

    findClientByDni(dni: string): Promise<Client> {
        return new Promise((resolve, reject) => {
            resolve(
                this.typeOrmRepository.findOne({
                    where: {
                        dni: dni
                    }
                })
            );
        })
    }

    createClient(client: Client): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let newClient = this.typeOrmRepository.create(client);
            this.typeOrmRepository.save(newClient);

            resolve();
        })
    }

    findAllClients(): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            resolve(
                this.typeOrmRepository.find()
            );
        })
    }

}

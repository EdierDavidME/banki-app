import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from '../api/dtos/create-client-dto';
import { ClientRepository } from './client.repositoy';
import { Client } from './client';
import { ClientRepositoryImpl } from '../infraestructure/client.repositoryimlp';

@Injectable()
export class ClientService {

  constructor(
    // @Inject('ClientRepository')
    private readonly clientRepository: ClientRepositoryImpl
  ) {

  }


  private readonly clients: CreateClientDto[] = [];

  async create(createClientDto: CreateClientDto) {

    let getDni = await this.clientRepository.findClientByDni(createClientDto.dni);
    if (getDni) {
      throw new Error('El cliente ya existe con el documento ingresado');
    }

    let client = new Client()
    client.dni = createClientDto.dni;
    client.firstName = createClientDto.firstName;
    client.lastName = createClientDto.lastName;
    client.mail = createClientDto.mail;
    client.phoneNumber = createClientDto.phoneNumber;
    // client.createDate = new Date();
    // client.updateDate = new Date();
    await this.clientRepository.createClient(client);
    // this.clients.push(createClientDto);
  }

  async getAll(): Promise<CreateClientDto[]> {
    // if (this.clients.length <= 0) throw new Error('No hay datos registrados');

    return await this.clientRepository.findAllClients();
  }
}

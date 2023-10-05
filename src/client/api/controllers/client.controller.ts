import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Req,
  Res,
} from '@nestjs/common';
import { CreateClientDto } from '../dtos/create-client-dto';
import { Response } from 'express';
import { ClientService } from 'src/client/domain/client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) { }

  @Post()
  async create(@Body() createClientDto: CreateClientDto, @Res() res: Response) {
    try {
      await this.clientService.create(createClientDto);

      res.status(HttpStatus.CREATED).json({
        status: 201,
        message: 'Registro exitoso',
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async getAll(@Res() res: Response) {
    try {
      res.status(HttpStatus.CREATED).json({
        status: 200,
        data: await this.clientService.getAll(),
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NO_CONTENT);
    }
  }
}

// nest g cl client/api/dtos/CreateClientDto --flat --no-spec

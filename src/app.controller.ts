import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response): string {
    console.log('req: ', req.query);
    res.status(HttpStatus.OK).json({
      status: 200,
      data: [
        {
          id: 0,
          name: 'test',
        },
      ],
    });
    return this.appService.getHello();
  }
}

/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { User } from 'src/core/decorators/user.decorator';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/user')
  async findOne(@User('firstName') firstName: string, @Res() response: Response) {
    return response.status(HttpStatus.OK).json({ message: `Hello ${firstName}` })
  }
}

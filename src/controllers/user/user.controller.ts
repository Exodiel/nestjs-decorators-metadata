/* eslint-disable prettier/prettier */
import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { Roles } from 'src/core/decorators/roles/roles.decorator';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @Roles('admin')
  getHello(): string {
    return this.userService.getUser();
  }

  @Get('public')
  @SetMetadata('roles', 'public')
  getHello2(): string {
    return this.userService.getUser();
  }

  @Get('unknown')
  getHello3(): string {
    return this.userService.getUser();
  }
}

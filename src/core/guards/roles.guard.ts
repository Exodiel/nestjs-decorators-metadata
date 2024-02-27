/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = {
      id: 101,
      firstName: "Alan",
      lastName: "Turing",
      email: "alan@email.com",
      roles: ["admin"]
    }
    const roles = this.reflector.get<string>('roles', context.getHandler());
    console.log({ roles })
    if (!roles) {
      return false
    }
    const requiredRoles = 'admin'
    if (!user.roles.includes(requiredRoles)) {
      return false
    }
    return true;
  }
}

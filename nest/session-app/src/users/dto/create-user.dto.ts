import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserRoles } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  roles: UserRoles;
}
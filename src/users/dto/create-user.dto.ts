import { IsEmail, IsEnum, IsAlpha, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'valid role required',
  })
  role: 'ENGINEER' | 'ADMIN' | 'INTERN';
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class CreateClientDto {

  @ApiProperty()
  @IsNotEmpty() @MinLength(3) @MaxLength(40)
   name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty()
  isActive: boolean; // Cambiado a boolean
}
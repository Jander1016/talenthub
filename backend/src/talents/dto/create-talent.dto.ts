import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class CreateTalentDto {
  @ApiProperty()
  @IsNotEmpty() @MinLength(3) @MaxLength(40)
  name_talent: string;

  @ApiProperty()
  @IsNotEmpty() @MinLength(9) @MaxLength(10)
  nro_identification: string;

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
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  personal_page: string;

  @ApiProperty()
  @IsNotEmpty()
  talent_description:string;

  @ApiProperty()
  isActive: boolean;
}

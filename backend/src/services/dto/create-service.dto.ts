import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceDto {

  @ApiProperty()
  name_service: string;

  @ApiProperty()
  description: string;

}
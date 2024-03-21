import { ApiProperty } from "@nestjs/swagger";

export class CreateStackDto {
  @ApiProperty()
  name_stack: string;

  @ApiProperty()
  service_id: string;
}

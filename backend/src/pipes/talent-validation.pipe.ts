// import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
// import { Talent } from '../talents/entities/talent.entity';

// @Injectable()
// export class TalentValidationPipe implements PipeTransform {
//   transform(value: any): Talent {
//     // Aquí puedes agregar la lógica de validación específica para la entidad Talent
//     // Por ejemplo, validación de campos como name_talent, email, password, etc.
//     if (!value.name_talent || !value.email || !value.password) {
//       throw new BadRequestException('Name, email, and password are required');
//     }
//     return value;
//   }
// }

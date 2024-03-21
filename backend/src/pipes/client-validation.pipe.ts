// import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
// import { Client } from '../clients/entities/client.entity';

// @Injectable()
// export class ClientValidationPipe implements PipeTransform {
//   transform(value: any): Client {
//     if (!value.name || !value.password || !value.email) {
//       throw new BadRequestException('Name, password, and email are required');
//     }
//     return value;
//   }
// }

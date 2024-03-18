export class CreateClientDto {
  name: string;
  password: string;
  email: string;
  avatar: string;
  isActive: boolean; // Cambiado a boolean
}
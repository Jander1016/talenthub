import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuth } from './dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { generateHash } from './utils/handleBcrypt';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>){}
  async create(registerAuthDto: RegisterAuthDto) {
    const { password, email } = registerAuthDto
    const hashedPassword = await generateHash(password)

    const newAuthDto = { email, password: hashedPassword}
    return this.authRepository.save(newAuthDto)
  }

}

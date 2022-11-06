import { Injectable } from '@nestjs/common';

import { RegisterDto } from '@modules/auth/dto/register.dto';
import { CreateUserService } from '@modules/users/services/create-user.service';

@Injectable()
export class RegisterService {
	constructor(private readonly createUserService: CreateUserService) {}

	async execute(registerDto: RegisterDto) {
		return this.createUserService.execute(registerDto);
	}
}

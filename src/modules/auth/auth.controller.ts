import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from '@modules/auth/dto/login.dto';
import { RegisterDto } from '@modules/auth/dto/register.dto';
import { LoginService } from '@modules/auth/services/login.service';
import { RegisterService } from '@modules/auth/services/register.service';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly loginService: LoginService,
		private readonly registerService: RegisterService
	) {}

	@Post('register')
	async register(@Body() registerDto: RegisterDto) {
		return this.registerService.execute(registerDto);
	}

	@Post('login')
	async login(@Body() loginDto: LoginDto) {
		return this.loginService.execute(loginDto);
	}
}

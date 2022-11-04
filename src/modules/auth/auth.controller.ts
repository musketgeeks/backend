import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from '@modules/auth/dto/login.dto';
import { LoginService } from '@modules/auth/services/login.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly loginService: LoginService) {}

	@Post('login')
	login(@Body() loginDto: LoginDto) {
		return this.loginService.login(loginDto);
	}
}

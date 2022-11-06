import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { instanceToInstance } from 'class-transformer';

import { LoginDto } from '@modules/auth/dto/login.dto';
import { GetUserService } from '@modules/users/services/get-user.service';

@Injectable()
export class LoginService {
	constructor(
		private readonly getUserService: GetUserService,
		private readonly jwtService: JwtService
	) {}

	#assignJwtToken(userId: string) {
		return this.jwtService.sign({ id: userId });
	}

	async execute({ email, password }: LoginDto) {
		const user = await this.getUserService.findByEmail(email);

		if (!user) {
			throw new UnauthorizedException('Email or password invalid!');
		}

		const isPasswordMatch = await compare(password, user.password);

		if (!isPasswordMatch) {
			throw new UnauthorizedException('Email or password invalid!');
		}

		return {
			token: this.#assignJwtToken(user.id),
			user: instanceToInstance(user)
		};
	}
}
